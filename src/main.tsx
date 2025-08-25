import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminSignIn from './Screens/Admin/AdminSignIn.tsx'
import PageNotFound from './Screens/others/page-not-found.tsx'

const router = createBrowserRouter([
  {
    path: '/GeeshWebsite/',
    element: <App />,
  },
  {
    path: '/GeeshWebsite/AdminSignIn/',
    element: <AdminSignIn />
  },
  {
    path: '*',
    element: <PageNotFound />
  },

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
