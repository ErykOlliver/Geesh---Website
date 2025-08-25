import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminPage from './Screens/Admin/AdminPage.tsx'

const router = createBrowserRouter([
  {
    path: '/GeeshWebsite/',
    element: <App />
  },
  {
    path: '/GeeshWebsite/AdminSignIn/',
    element: <AdminPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
