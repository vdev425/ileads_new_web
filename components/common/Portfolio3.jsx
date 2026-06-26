import React from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems13 } from "@/data/portfolio";

export default function Portfolio3({ isLight = false }) {
  return (
    <div className="tmp-portfolio-area tmp-section-gap BoardOfDirectors" id="portfolio">
      <div className="container">
        <div className="inner">
          <div className="section-head mb--50">
            <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1" animation-end="">
              <span className="subtitle"> Meet Our Visionaries - The Board of Directors Driving Our Success</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2" animation-end="">Board of Directors</h2>
            <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3" animation-end="">
             
              The Board of Directors at iLeads represents the guiding force behind the company’s vision, strategy, and values. With a commitment to excellence, integrity, and innovation, our leadership team drives the organization toward sustainable growth while fostering an empowering culture for our people.
            </p>
          </div>
          <div className="experiences-wrap mt--50">
            <div className="row align-items-center mb--50">
              <div className="col-lg-8">
                <div className="section-head experiences-wrap-left-content text-align-left mb--50">
                  <h3 className="title custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                    Ankur Sinha{" "}
                    <span>
                      <Image
                        alt="custom-line"
                        width={81}
                        height={6}
                        src="/assets/images/custom-line/custom-line.png"
                      />
                    </span>
                  </h3>
                  <p className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-3 mb--20">
                    Director
                  </p>
                  <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <p className="ex-para description fst-italic">"Driving innovation with integrity, to shape iLeads as a hub of opportunities and excellence."</p>
                    <p className="ex-para description">
                      “At iLeads, we believe in building a culture where innovation, dedication, and professionalism come together to deliver impactful results. As the Director, I take pride in leading a team that is not only passionate about excellence but also committed to creating opportunities for growth—both for our clients and our people. Over the years, iLeads has emerged as a trusted name in business process outsourcing and digital transformation, powered by technology, creativity, and customer-centricity.
                    </p>                  
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="experiences-wrap-right-content BODImage tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <Image
                    className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                    alt="Ankur Sinha"
                    width={630}
                    height={479}
                    src="/assets/images/home-01/team-img-01.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center mb--50">

              <div className="col-lg-4">
                <div className="experiences-wrap-left-content BODImage tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <Image
                    className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                    alt="Anubha Sinha"
                    width={630}
                    height={479}
                    src="/assets/images/home-01/team-img-02.jpg"
                  />
                </div>
              </div>

              <div className="col-lg-8">
                <div className="section-head experiences-wrap-left-content text-align-left mb--50">
                  <h3 className="title custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                    Anubha Sinha{" "}
                    <span>
                      <Image
                        alt="custom-line"
                        width={81}
                        height={6}
                        src="/assets/images/custom-line/custom-line.png"
                      />
                    </span>
                  </h3>
                  <p className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-3 mb--20">
                    Director - Chief Financial Officer
                  </p>
                  <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <p className="ex-para description fst-italic">"Ensuring financial strength and sustainable growth to power iLeads’ vision for the future."</p>
                    <p className="ex-para description">
                      “As the CFO and Director of iLeads, my focus has always been on building a financially sound and future-ready organization. At iLeads, we believe that strong financial stewardship and strategic planning are the foundation for sustainable growth. With a balance of innovation, operational excellence, and fiscal discipline, we have created a business environment that not only drives profitability but also fosters trust and long-term partnerships.""
                    </p>
                   
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
