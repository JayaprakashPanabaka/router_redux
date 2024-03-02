import React from "react";
import BlogList from "./BlogList";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center m-11">
      {/* <img
        src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
        alt="home"
        className="h-[300px]"
      />
      <h1 className="text-[#6d396b] text-5xl font-bold py-3">Home</h1> */}
      <BlogList />
    </div>
  );
};

export default Home;
