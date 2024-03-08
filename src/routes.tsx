import './global.css'

import { createBrowserRouter } from 'react-router-dom'



import { AuthLayout } from './Pages/layouts/auth'
import { SignIn } from './Pages/auth/sign-in'
import { AppLayout } from './Pages/layouts/app'
import { HomePage } from './Pages/Home'
import { Company } from './Pages/Home/company'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {path:'/home', element: <HomePage />},
      {path: '/home/company', element: <Company/>}
    ], 
   
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {path: '/login',element: <SignIn />}
    ]
  },
])
