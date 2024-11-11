

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
  },
  {
    path:'/transcription',
    element:<TranscriptionResult/>
  }
]);
import {store} from '../src/redux/app/store'

import { Provider } from "react-redux";
import TranscriptionResult from "./pages/TranscriptionResult/TranscriptionResult";
const App = () => {
  return (
    <Provider store={store}>
    <RouterProvider router={router} />
    
      </Provider>
  )
}

export default App