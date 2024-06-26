import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Layouts/Root.jsx'
import Home from './Pages/Home.jsx'
import Blogs from './Pages/Blogs.jsx'
import Bookmarks from './Pages/Bookmarks.jsx'

const router = createBrowserRouter([

  {
    path:'/',
    element: <Root></Root>,
    children:[

      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/blogs',
        element: <Blogs></Blogs>
      },
      {
        path:'/bookmarks',
        element: <Bookmarks></Bookmarks>
      }
    ]
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
