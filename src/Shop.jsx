import { Link } from "react-router";
import { useEffect , useState} from "react";
import { useOutletContext } from "react-router";
import './Shop.css';



function Image({productImages , cartData}){
   console.log("productImages are ",productImages);
  return(
    <>
    { productImages.map((data) => (
    <div className="image" key={data.title.split(' ').slice(-3)[0] + data.id}>
      <img src={data.image} alt="" />

      <div className="addcart">
          <p className="des">{data.description}</p>
         <div className="cart">
          <div className="quantity">
              <button>minus</button>
 {!(data.title.split(' ').slice(-3)[0] in cartData) ? <p>0</p> : <p>cartData.id.quantity</p>}
              <button>plus</button>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>

    </div>))}
  </>
  )
}

export default function Shop(){
  const [productImages , setproductImages] = useState([]);
  const {cartData} = useOutletContext()
    // extract data from the api
    useEffect(()=>{
    async function getData(){
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      console.log(data.length);
      let newdata=[]
      for(let i =0; i < data.length ; i++){
          newdata.push(data[i]);
        console.log(data[i])
      }
      console.log("newdata is ",newdata)
      setproductImages(newdata);
    }
    getData();
  },[])
    return(
    <>
      <header>
        <h1>Shopping</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </header>
      <div className="shop">
        <Image productImages={productImages} cartData={cartData} />
      </div>

    </>
    )
}

