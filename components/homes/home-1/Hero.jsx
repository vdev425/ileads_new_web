import React from "react";
import Image from "next/image";
import Link from "next/link";
import TyperComponent from "@/components/common/TyperComponent";
export default function Hero() {
  return (
    <div className="tmp-banner-one-area">
      <div className="container">
        <div className="banner-one-main-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="banner-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1 lazyload"
                  alt="Customer experience transformation"
                  src="/assets/images/home-01/banner-bg-0.webp"
                  width={1000}
                  height={1000}
                />
                {/* <h2 className="banner-big-text-1 up-down">iLeads</h2>
                <h2 className="banner-big-text-2 up-down-2">iLeads</h2> */}
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="inner">
                
                <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2 mt--5">
                  Looking for a customer experience transformation? <br />
                  
                </h1>
                <span className="title header-caption">
                    <span className="cd-headline clip is-full-width">
                      <TyperComponent
                        strings={[
                          "Process Excellence.",
                          "We Work 24/7.",
                          "Affordable Prices.",
                        ]}
                      />
                    </span>
                  </span>
                <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3">
                  You’re at the right place then!
                </p>
                <div className="button-area-banner-one tmp-scroll-trigger tmp-fade-in animation-order-4">
                  <Link
                    className="tmp-btn hover-icon-reverse radius-round"
                    href={`/contact-us`}
                    aria-label="Customer experience transformation"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Contact Us</span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
