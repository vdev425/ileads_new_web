import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio3({ isLight = false }) {
  return (
    <div className="tmp-portfolio-area tmp-section-gap" id="portfolio">
      <div className="container">
        <div className="inner">
          <div className="section-head text-align-left mb--50">
            <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
              Gallery 
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
              Capturing the spirit of our people, our culture, and our journey together.
            </h3>
            <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
              At iLeads, excellence isn't just a goal; it's a way of life. We're committed to creating a workplace where every individual can thrive, grow, and make their mark on the world. Join us, and together, let's redefine what's possible.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <Image className="rounded" alt="Dehradun Office" src="/assets/images/locations/Dehradun-Office.webp" width={410} height={457} />
                    <div className="portfolio-card-content-wrap">
                    <div className="content-left">
                      {/* <p className="portfoli-card-para">kn</p> */}
                      <h3 className="portfolio-card-title animated fadeIn">
                          Dehradun Office
                      </h3>
                    </div>
                     <div className="portfolio-btn">
                      <Link
                        href="/life-at-ileads-dehradun"
                        className="tmp-arrow-icon-btn"
                        aria-label="Open Dehradun Gallery"
                      >
                        <div className="btn-inner">
                          <i className="tmp-icon fa-solid fa-arrow-up-right" />
                          <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <Image className="rounded" alt="Gurugram Office" src="/assets/images/locations/Gurugram-Office.jpg" width={410} height={457} />
                    <div className="portfolio-card-content-wrap">
                    <div className="content-left">
                      {/* <p className="portfoli-card-para">kn</p> */}
                      <h3 className="portfolio-card-title animated fadeIn">
                          Gurugram Office
                      </h3>
                    </div>
                     <div className="portfolio-btn">
                      <Link
                        href="/life-at-ileads-gurugram"
                        className="tmp-arrow-icon-btn"
                        aria-label="Open Gurugram Gallery"
                      >
                        <div className="btn-inner">
                          <i className="tmp-icon fa-solid fa-arrow-up-right" />
                          <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <Image className="rounded" alt="Noida Office" src="/assets/images/locations/Noida-Office.jpg" width={410} height={457} />
                    <div className="portfolio-card-content-wrap">
                    <div className="content-left">
                      {/* <p className="portfoli-card-para">kn</p> */}
                      <h3 className="portfolio-card-title animated fadeIn">
                          Noida Office
                      </h3>
                    </div>
                     <div className="portfolio-btn">
                      <Link
                        href="/life-at-ileads-noida"
                        className="tmp-arrow-icon-btn"
                        aria-label="Open Noida Gallery"
                      >
                        <div className="btn-inner">
                          <i className="tmp-icon fa-solid fa-arrow-up-right" />
                          <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <Image className="rounded" alt="Bengaluru Office" src="/assets/images/locations/Bangluru-Office.jpg" width={410} height={457} />
                    <div className="portfolio-card-content-wrap">
                    <div className="content-left">
                      {/* <p className="portfoli-card-para">kn</p> */}
                      <h3 className="portfolio-card-title animated fadeIn">
                          Bengaluru Office
                      </h3>
                    </div>
                     <div className="portfolio-btn">
                      <Link
                        href="/life-at-ileads-bengaluru"
                        className="tmp-arrow-icon-btn"
                        aria-label="Open Bengaluru Gallery"
                      >
                        <div className="btn-inner">
                          <i className="tmp-icon fa-solid fa-arrow-up-right" />
                          <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <Image className="rounded" alt="Mumbai Office" src="/assets/images/locations/Mumbai-Office.jpg" width={410} height={457} />
                    <div className="portfolio-card-content-wrap">
                    <div className="content-left">
                      {/* <p className="portfoli-card-para">kn</p> */}
                      <h3 className="portfolio-card-title animated fadeIn">
                          Mumbai Office
                      </h3>
                    </div>
                     <div className="portfolio-btn">
                      <Link
                        href="/life-at-ileads-mumbai"
                        className="tmp-arrow-icon-btn"
                        aria-label="Open Mumbai Gallery"
                      >
                        <div className="btn-inner">
                          <i className="tmp-icon fa-solid fa-arrow-up-right" />
                          <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                        </div>
                      </Link>
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
