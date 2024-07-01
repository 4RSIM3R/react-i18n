import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "yet-another-react-lightbox/styles.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Photo } from '@/pages/Photo';
import { Facility } from '@/pages/Facility';
import { Layout } from '@/layouts/Layout';
import { About } from '@/pages/About';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

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
        path: "facility",
        element: <Facility />
      },
      {
        path: "gallery",
        element: <Photo />
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
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>,
)
