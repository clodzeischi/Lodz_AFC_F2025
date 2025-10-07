import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from "./components/AppLayout.jsx";
import RandomDogPage from "./pages/RandomDogPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import SplashPage from "./pages/SplashPage.jsx";

const router = createBrowserRouter( [
    {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
        {path: 'results', element: <RandomDogPage />},
        {path: 'splash', element: <SplashPage />},
        {index: true, element: <SplashPage />},
        {path: "*", element: <ErrorPage />}
    ]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
