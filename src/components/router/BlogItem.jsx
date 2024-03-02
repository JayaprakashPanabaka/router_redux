import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blogItem }) => {
  const { id, avatar_url, author, image_url, title, topic } = blogItem;
  return (
    <Link to={`blogs/${id}`}>
      <div className="flex gap-5 border-[2px] m-3 p-3 rounded-lg">
        <div>
          <img src={image_url} alt={title} className="h-[200px] w-96" />
        </div>
        <div className="flex flex-col">
          <p>{topic}</p>
          <h3>{title}</h3>
          <div className="flex items-center gap-1">
            <img className="h-12 rounded-full" src={avatar_url} alt={author} />
            <span>{author}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
