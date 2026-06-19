import { Link } from "react-router";

export default function Cart(){
  return(
    <> 
      <p>i am cart</p>
      <header>
        <h1>Shopping</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </header>
    </>
  )
}
