import { useState, useEffect } from "react";
import BlogItem from "./BlogItem";
import { LuLoader2 } from "react-icons/lu";

const BlogList = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://apis.ccbp.in/blogs";
  useEffect(() => {
    const fetchBlogData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setBlogData(jsonData);
      setIsLoading(!isLoading);
    };
    fetchBlogData();
  }, []);
//   console.log(blogData);

  return (
    <div className="flex flex-col justify-center">
      {isLoading ? (
        <button type="button" disabled>
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <LuLoader2 className="text-sky-500 text-3xl" />
          </svg>
        </button>
      ) : (
        <div>
          {blogData.map((item) => {
            return <BlogItem key={item.id} blogItem={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default BlogList;
