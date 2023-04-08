import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './style.css'
import { GlobalProvider } from './context'


// routes
import Root from './routes/root'
import ItemRoot from './routes/Item'
import Layout from '../src/components/Layout'
import CartRoot from '../src/components/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/category/:id",
        element: <Root />,
      },
      {
        path: "/item/:id",
        element: <ItemRoot />,
      },
      {
        path: "/cart",
        element: <CartRoot />,
      },
      {
        path: "/checkout",
        element: <div>Hello world!</div>,
      },
      {
        path: "/contact",
        element: <div>Hello world!</div>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>,
)
