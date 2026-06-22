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
  const cartAdd = (superkey,quantity,image)=>{
    if(!(superkey in cartData)){
        setCartdata({...cartData,superkey:{...userData,img:image,quantity:quantity+1,total}})
    }else{
      
} 
  }
  return(
  <main>
    <Outlet context={{cartData}} />
  </main>
  )
}





export default function App(){
    return <RouterProvider router={router} />;
}
