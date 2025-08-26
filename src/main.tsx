import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminSignIn from './Screens/Admin/AdminSignIn.tsx'
import PageNotFound from './Screens/others/page-not-found.tsx'
import Admin from './Screens/Admin/Admin.tsx'
import ProtectRouter from './Screens/Admin/components/ProtectRouter.tsx'

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
    path: '/GeeshWebsite/Admin',
    element: (
      <ProtectRouter>
        < Admin />
      </ProtectRouter>
    )
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
