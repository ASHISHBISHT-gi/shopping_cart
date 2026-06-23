import { Link } from "react-router";
import { useOutletContext } from "react-router";
import "./Cart.css"

// Cartitems
function CartItems(){
  // outlet data
  const {cartData , cartAdd , cartSub} = useOutletContext();
  const keysdata=Object.keys(cartData);
  return(
    <>
    {
    keysdata.map((keys)=>(
  <div className="cartitems" key={keys}>
   <img src={cartData[keys].image} alt="" />
   <div id="cartinfo">
    <h1>Total: $<span>{cartData[keys].total}</span></h1>
    <div>
      <div>
      <img src="" alt="minus" />
      <h2>{cartData[keys].quantity}</h2>
      <img src="" alt="plus" />
      </div>
      <img src="" alt="delete" />
    </div>
    <button type="">Buy</button>

   </div>
  </div>
  ))
  }
  </>
  )
}

export default function Cart(){
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
      <div className="cartbox">
      <CartItems />
      </div>
    </>
  )
}
