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
import Checkout from './routes/checkout';
import ContactRoot from './routes/contact';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};


initializeApp(firebaseConfig);

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
        path: "/Checkout",
        element: <Checkout />,
      },
      {
        path: "/contact",
        element: <ContactRoot />,
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
