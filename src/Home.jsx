import { Link } from "react-router";

export default function Home(){
    return(
    <>
      <p>i am home</p>
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
