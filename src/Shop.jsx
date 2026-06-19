import { Link } from "react-router";
import { useEffect , useState} from "react";
function Image(){
  
  
  return(
    <p>i am image</p>
  )
}








export default function Shop(){
  const [productData , setproductData] = useState([]);
    // extract data from the api
    useEffect(()=>{
    async function getData(){
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      console.log(data.length);
      let newdata=[]
      for(let i =0; i < data.length ; i++){
          newdata.push(data[i].image);
        console.log(data[i])
      }
      console.log("newdata is ",newdata)
      setproductData(newdata);
    }
    getData();
  },[])
    return(
    <>
      <p>i am shop</p>
      <header>
        <h1>Shopping</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </header>
      <div className="shop">
        <Image />
      </div>

    </>
    )
}

