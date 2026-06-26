import React from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems9 } from "@/data/portfolio";
import SubscribeModal from "@/components/modals/SubscribeModal";

export default function Portfolios2({ isLight = false }) {
  return (
    <section className="tmp-latest-portfolio tmp-section-gapTop tmp-section-gapBottom">
      <div className="container">
        <div className="header-top-inner">
          <div className="section-head text-align-left">
            <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">Discover the Latest Buzz</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Catch up on the Latest News and <br />
              Updates from Our Brand
            </h2>
          </div>
          <div className="discription-area tmp-scroll-trigger tmp-fade-in animation-order-3">
            <p className="description">
              Explore how leading companies are shaping the market, discover emerging names making an impact, and stay connected with everything that matters in <span>business</span>, <span>lifestyle</span>, and <span>beyond</span>.
            </p>
          </div>
        </div>
        <div className="row g-5">
          {portfolioItems9.map((item) => (
            <div className="col-lg-4 col-md-4 col-12" key={item.id}>
              <div
                className={`latest-portfolio-card-style-two tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
              >
                <div className="portfoli-card-img">
                  <div className="img-box v2">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        className="img-primary hidden-on-mobile"
                        alt={item.altText}
                        src={item.imageSrc}
                        width={item.width}
                        height={item.height}
                      />
                      <Image
                        className="img-secondary"
                        alt={item.altText}
                        src={item.imageSrc}
                        width={item.width}
                        height={item.height}
                      />
                    </a>
                  </div>
                </div>
                <div className="portfolio-card-content-wrap">
                  <div className="content-left">
                    <h3 className="portfolio-card-title">
                      <a
                        href={item.link}
                      target="_blank" 
                      >
                        {item.title}
                      </a>
                    </h3>
                    
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="see-all-btn-wrap text-center mt--60">
          <SubscribeModal />
        </div>
      </div>
    </section>
  );
}
