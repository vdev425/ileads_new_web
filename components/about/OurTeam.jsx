import React from "react";
import Image from "next/image";
import Link from "next/link";
import {portfolioItems14 } from "@/data/portfolio";

export default function OurTeam({ isLight = false }) {
  return (
    <div className="tmp-portfolio-area tmp-section-gapBottom" id="portfolio">
      <div className="container">
        <div className="inner">
          <div className="section-head text-align-left mb--50">
            <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
             Driving Excellence Through Visionary Leadership
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
               Leadership Team - Corporate
            </h3>
            <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
              At iLeads, our corporate leadership team represents a blend of strategic insight, innovation, and a deep commitment to excellence. Each leader brings a wealth of experience and a shared vision to guide the organization toward sustainable growth and success. Together, they foster a culture of collaboration, integrity, and performance — ensuring that iLeads continues to deliver value, empower its people, and lead with purpose in a rapidly evolving business landscape.
            </p>
          </div>
           <div className="row">
            {portfolioItems14.map((item) => (
              <div className="col-lg-3 col-md-3 col-sm-12" key={item.id}>
                <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <Image
                    alt={item.altText}
                    src={item.imageSrc}
                    width={410}
                    height={457}
                  />
                  <div className="portfolio-card-content-wrap">
                    <div className="content-left">
                      <p className="portfoli-card-para">{item.description}</p>
                      <h3 className="portfolio-card-title animated fadeIn">
                        {item.title}
                      </h3>
                    </div>
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
