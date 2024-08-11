import { useState } from 'react'
import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// components
import MainLayout from './layouts/MainLayout'
import Error from './Components/Error'
import Home from './Components/Home'
import Register from './Components/Register'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/register',
          element: <Register />
        }
      ]
    }
  ])

  return  <RouterProvider router={routes} />
}

export default App
