import { Link } from "react-router";
import "./Cart.css"

// Cartitems
function CartItems(){
  return(
  <div>
   <img src="" alt="" />
   <div>
    <h1>Total: $<span></span></h1>
    <div>
      <div>
      <img src="" alt="minus" />
      <h2>0</h2>
      <img src="" alt="plus" />
      </div>
      <img src="" alt="delete" />
    </div>
    <button type="">Buy</button>

   </div>
  </div>
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
      <div className="cart">
      
      </div>
    </>
  )
}
