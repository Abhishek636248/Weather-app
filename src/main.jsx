import { StrictMode } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from '../layout.jsx';
import Home from './component/home/home.jsx';
import Live from './component/liveweather/liveweather.jsx';
import Forcast from './component/forcast/forcast.jsx';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const router=createBrowserRouter([   //router object create kiya gya hai jisme ek array hai
  {
    path:'/',                        
    element:<Layout/>,              //layout me kyi children pde hai 
    children:[
      {
         path:"",
         element: <Home/>
      },
      {
        path:"/live",
        element:<Live/>
      },
      {
        path:"/weather-foracast",
        element:<Forcast/>
      }
       ]
  }
]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/> 
  </StrictMode>,
)
