import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminSignIn from './Screens/Admin/AdminSignIn.tsx'

const router = createBrowserRouter([
  {
    path: '/GeeshWebsite/',
    element: <App />
  },
  {
    path: '/GeeshWebsite/AdminSignIn/',
    element: <AdminSignIn />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
