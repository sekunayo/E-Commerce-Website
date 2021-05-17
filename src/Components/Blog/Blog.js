import React from "react";
import BlogBox from "./BlogBox/BlogBox";
import { blogInformation } from "../../data.js";
import "../Blog/blog.css";

function Blog() {
  return (
    <div className="blog-container">
      <div className="inner-blog-container">
        <h3 className="blog-heading">Latest Blog</h3>
        <div className="blog-box-container">
          {blogInformation.map((element) => {
            return (
              <BlogBox
                key={element.id}
                image={element.image}
                title={element.title}
                date={element.date}
                count={element.count}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
