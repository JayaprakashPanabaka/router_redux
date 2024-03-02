import React from 'react'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Header from './Header'
import Home from './Home/Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import BlogItemDetails from './BlogItemDetails'

const AppLayout = () => {
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/blogs/:id',
                element: <BlogItemDetails />,
            },
        ]
    }
])



function FetchAndRoutingPractice() {
  return (
    <div className='border-[5px] m-5 p-5 rounded-lg border-[#551e53]'>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default FetchAndRoutingPractice
