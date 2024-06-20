import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Gallery } from '@/pages/Gallery';
import { Facility } from '@/pages/Facility';
import { Layout } from '@/layouts/Layout';
import "@/lib/i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "gallery",
        element: <Gallery />
      },
      {
        path: "facility",
        element: <Facility />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
