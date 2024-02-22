import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Toaster />
      <Helmet titleTemplate="%s | Erp.dev" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
