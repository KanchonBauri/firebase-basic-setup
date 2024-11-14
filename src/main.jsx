import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Comronents/MainLayout/MainLayout';
import Home from './Comronents/Home/Home';
import Login from './Comronents/Login/Login';
import Signup from './Comronents/SignUp/Signup';
import SignIn from './Comronents/SignIn/SignIn';
import Profile from './Comronents/Profile/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
