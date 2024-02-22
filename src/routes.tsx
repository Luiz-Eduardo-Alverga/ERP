import './global.css'

import { createBrowserRouter } from 'react-router-dom'



import { AuthLayout } from './Pages/layouts/auth'
import { SignIn } from './Pages/auth/sign-in'
import { AppLayout } from './Pages/layouts/app'
import { HomePage } from './Pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {path:'/home', element: <HomePage />}
    ]
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {path: '/login',element: <SignIn />}
    ]
  },
])
