import { Link } from "react-router";
import "./Cart.css"
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
