import React from "react";
import Image from "next/image";
import Link from "next/link";
import { vacancies } from "@/data/expertise";
export default function Experiences2() {
  return (
    <section className="my-expertise-area tmp-t tmp-section-gapTop tmp-section-gapBottom">
      <div className="container">
        <div className="header-top-inner">
          <div className="section-head text-align-left">
            <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">Unlock Your Potential, Shape Your Future</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Grow Your Career with Us
            </h2>
          </div>
          <div className="discription-area tmp-scroll-trigger tmp-fade-in animation-order-3">
            <p className="description color-primary-3rd">
              Join our dynamic team, enhance your skills, and take your career to the next level with mentorship, learning, and real-world experience.
            </p>
          </div>
        </div>
        <div className="services-widget v2">
          {vacancies.map((item, index) => (
            <div
              className={`service-item tmp-scroll-trigger tmp-fade-in ${
                index == 0 ? "current" : ""
              } animation-order-${item.animationOrder}`}
              key={index}
            >
              <div className="my-expertise-card-wrap">
                <div className="expertise-card-left">
                  {/* <div className="expertise-card-logo">
                    <Image alt="logo" src={item.icon} width={45} height={45} />
                  </div> */}
                  <h3 className="title">{item.title}</h3>
                </div>
                {/*<div
                  className="single-progress-circle sal-animate"
                  data-sal-delay={300}
                  data-sal="slide-up"
                  data-sal-duration={1000}
                >
                   <svg
                    className="radial-progress"
                    data-countervalue={item.counterValue}
                    viewBox="0 0 80 80"
                  >
                    <circle className="bar-static" cx={40} cy={40} r={35} />
                    <circle
                      className="bar--animated"
                      cx={40}
                      cy={40}
                      r={35}
                      style={{ strokeDashoffset: "131.947px" }} 
                    /> 
                    <text
                      className="countervalue"
                      x="50%"
                      y="55%"
                      transform="matrix(0, 1, -1, 0, 80, 0)"
                    >
                      {item.percentage}
                    </text>
                  </svg>
                </div>*/}
                <p className="para mb-0">{item.fullhrs}</p>
                <p className="para mb-0">{item.description}</p>
                <div className="">
                  <Link href="/job-application" className="tmp-link-with-icon btn-fill btn-sm radius-round btn-primary fs-4 tmp-btn" aria-label="Apply Now">
                    Apply Now <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <button className="service-link modal-popup" />
            </div>
          ))}
          <div className="active-bg wow fadeInUp mleave" />
        </div>
      </div>
    </section>
  );
}
