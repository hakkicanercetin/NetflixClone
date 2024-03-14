import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom';
import "../index.css"
import Root from './Components/Root';
import Register from './pages/Register';
import Login from './pages/Login';
import Browse, { getMovies } from './pages/Browse';
import { Toaster } from 'react-hot-toast';
import "./style.css"
import { ConfigProvider } from 'antd';
import Homepage from './pages/Homepage';
const router = createHashRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        index:true,
        element:<Homepage></Homepage>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/browse",
        element:<Browse />,
        loader:getMovies
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
  theme={{
    components: {
      Modal: {
        contentBg:"#000",
      },
    },
  }}
>
    <RouterProvider router={router} />
    <Toaster position="top-center"/>
</ConfigProvider>
  </React.StrictMode>,
)
