import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Details from './Pages/Details.jsx'
import Post from './Pages/post.jsx'
import {createBrowserRouter ,RouterProvider} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
const routes = createBrowserRouter([
  {path:"/" , element :<App />},
  {path:"/post" , element :<Post />},
  {path:"/details/:jobId" , element :<Details />},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ToastContainer />
      <RouterProvider router={routes}/>
  </StrictMode>,
)
