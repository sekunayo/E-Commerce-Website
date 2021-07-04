import React from "react";
import "../BlogBox/blogBox.css";

function BlogBox(props) {
  return (
    <div className="blog-box">
      <div className="blog-image-box">
        <img src={props.image} alt="blog"></img>
      </div>
      <div className="blog-content-box">
        <h4>
          <a href="#tag" className="blog-title">
            {props.title}
          </a>
        </h4>
        <ul className="blog-info">
          <li>
            <span>
              <i className="fas fa-user"></i>
            </span>
            <span>admin</span>
          </li>
          <li>
            <span>
              <i className="fas fa-comments"></i>
            </span>
            <span>
              <span className="count">{props.count}</span>comments
            </span>
          </li>
          <li>
            <span>
              <i className="far fa-calendar-alt"></i>
            </span>
            <span>{props.date}</span>
          </li>
        </ul>
        <p className="blog-paragraph">
          Lorem ipsum dolor sit ame consetur adipisicing elit. Voluptate,
          consetur adipisicing elit.Lorem ipsum dolor.
        </p>
        <a href="#tag" className="blog-read-more">
          Read More
          <span>
            <i className="fas fa-long-arrow-alt-right"></i>
          </span>
        </a>
      </div>
    </div>
  );
}

export default BlogBox;
