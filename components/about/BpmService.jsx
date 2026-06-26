import React from "react";
export default function SocialAcc() {
  return (
    <section className="service-area tmp-section-gap SocialAcc" id="SocialAcc">
      <div className="container">
        <div>
          <div className="row section-head justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center mb-4">
                <h2>Revolutionize your customer interactions with our Business Process Management (BPM) services.</h2>
                
                <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">You focus on the profit making while we rescue you from the hassles of additional EXPLORE NOW!</p>
            </div>
          </div>
        </div>
        <div className="see-all-btn-wrap text-center mt--60">
          <a className="tmp-btn hover-icon-reverse radius-round" href="/contact-us">
            <span className="icon-reverse-wrapper">
              <span className="btn-text">Contact Us</span>
              <span className="btn-icon">
                <i className="fa-sharp fa-regular fa-arrow-right" />
              </span>
              <span className="btn-icon">
                <i className="fa-sharp fa-regular fa-arrow-right" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}