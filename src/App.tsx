

import { RouterProvider } from "react-router-dom"



import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home'
import Login from "./pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path:'/login',
    element:<Login/>
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App