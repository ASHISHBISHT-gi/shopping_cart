import { createBrowserRouter , Outlet , RouterProvider } from 'react-router';
import Shop from './Shop.jsx';
import Cart from './Cart.jsx';
import Home from './Home.jsx';
import {useState} from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Appcanvas />,
    children:[
    {index: true, element: <Home />},
    {path: "shop", element: <Shop />},
    {path: "cart", element: <Cart />},
   ],
  },
]);

function Appcanvas(){
  const userData={
    img:"",
    quantity:"",
    total: "",
    id: "",
  }
  const [cartData, setCartdata] = useState({});
  // add feature 
  const cartAdd = (superkey)=>{
    console.log("i ran");
    console.log("superkey is ",superkey);
    if(!(superkey in cartData)){
        console.log("if")
        setCartdata({...cartData,[superkey]:{quantity:1}})
    }else{
        setCartdata({...cartData,[superkey]:{...cartData[superkey],quantity: cartData[superkey].quantity+1}}) 
    } 
  }
  // subtract feature
  const cartSub =(superkey)=>{
         console.log("superkey",superkey);
         if((superkey in cartData) && cartData[superkey].quantity != 0){
              setCartdata({...cartData,[superkey]:{...cartData[superkey],quantity:cartData[superkey].quantity-1}})
    }
  }
  // sumbit data
  const cartSubmit = (superkey,pic,price)=>{
      if(superkey in cartData){
          let total_price = cartData[superkey].quantity * price;
          setCartdata({...cartData,[superkey]:{...cartData[superkey],total:total_price,image:pic}})
    }
  }

  // delete data
  const cartDelete=(superkey)=>{
        let tempobj = {...cartData};
        delete tempobj[superkey];
        setCartdata({...tempobj});
  }
  
  
  return(
  <main>
    <Outlet context={{cartData , cartAdd , cartSub , cartSubmit , cartDelete}} />
  </main>
  )
}





export default function App(){
    return <RouterProvider router={router} />;
}
