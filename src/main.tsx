import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Photo } from '@/pages/Photo';
import { Facility } from '@/pages/Facility';
import { Layout } from '@/layouts/Layout';
import { About } from '@/pages/About';
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
        element: <Photo />
      },
      {
        path: "facility",
        element: <Facility />
      },
      {
        path: "about-us",
        element: <About />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
