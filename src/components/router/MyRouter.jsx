import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import BlogItemDetails from "./BlogItemDetails";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs/:id",
        element: <BlogItemDetails />,
      },
    ],
  },
]);

const MyRouter = () => {
  return (
    <div className="border-[#551e53] border-[5px] p-3 m-3 rounded-xl">
      {/* <Header />
      <Home />
      <About />
      <Contact />
      <NotFound /> */}
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs/:id" element={<BlogItemDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes> 
      </BrowserRouter> */}
      <RouterProvider router={myRoutes} />
    </div>
  );
};

export default MyRouter;
