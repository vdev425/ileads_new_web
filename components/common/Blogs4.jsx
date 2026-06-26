import React from "react";
import Image from "next/image";
import { blogData5 } from "@/data/blogs";

import Link from "next/link";
export default function Blogs4({ isLight = false }) {
  return (
    <div className="tmp-blog-area tmp-section-gapTop" id="blog">
      <div className="container">
        <div className="inner">
          <div className="section-head text-align-left mb--50">
            <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
              Articles
              <span>
                <Image
                  alt="custom-line"
                  src="/assets/images/custom-line/custom-line.png"
                  width={81}
                  height={6}
                />
              </span>
            </h2>
            <h3 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Explore insights, company highlights, and industry updates
            </h3>
            <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
              Explore our collection of articles that delve deep into the world of business process management. From expert opinions to industry trends, our articles provide valuable insights to help you stay informed and ahead of the curve.
            </p>
          </div>
          <div className="row g-5">
            {blogData5.map((blog) => (
              <div key={blog.id} className="col-lg-3 col-md-4 col-12">
                <div
                  className={`blog-card-style-two tmp-scroll-trigger tmp-fade-in tmponhover ${blog.animationOrder}`}
                >
                  <div className="blog-card-img">
                    <div className="img-box">
                      <a
                        href={blog.link}
                        target="_blank"
                      >
                        <Image
                          className="img-primary hidden-on-mobile"
                          alt={blog.altText}
                          src={blog.imageSrc}
                          width={blog.width}
                          height={blog.height}
                        />
                        <Image
                          className="img-secondary"
                          alt={blog.altText}
                          src={blog.imageSrc}
                          width={blog.width}
                          height={blog.height}
                        />
                      </a>
                    </div>
                    <span>{blog.date}</span>
                  </div>
                  <div className="blog-content-wrap">
                    {/* <div className="blog-tags">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-user" />
                            {blog.author}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-comments" />
                            {blog.comments}
                          </a>
                        </li>
                      </ul>
                    </div> */}
                    <h4 className="blog-title">
                      <a
                        href={blog.link}
                        target="_blank"
                      >
                        {blog.title}
                      </a>
                    </h4>
                    {/* <div className="tmp-button-here">
                      <Link
                        className="tmp-btn hover-icon-reverse radius-round btn-border btn-md"
                        href={`/blog-details${isLight ? "-white" : ""}/${
                          blog.slug
                        }`}
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Read More</span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-regular fa-arrow-right" />
                          </span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-regular fa-arrow-right" />
                          </span>
                        </span>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
