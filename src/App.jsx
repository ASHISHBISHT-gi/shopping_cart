import { createBrowserRouter , RouterProvider } from 'react-router';
import Shop from './Shop.jsx';
import Cart from './Cart.jsx';
import Home from './Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);







export default function App(){
    return(
    <main>
      <p>i am main in App</p>
      <RouterProvider router={router} />
    </main>
    )
}
