import Link from "next/link";
import React from "react";
export default function OurPurpose() {
  return (
    <section className="service-area tmp-section-gap OurPurpose" id="OurPurpose">
      <div className="container">
        <div>
          <div className="row section-head justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center mb-4">
                <h2>Our Main Purpose</h2>
                <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">The central purpose of our organization is to permit our clients to focus their attention on their business strategies and growth, while we, at iLeads, step up and take care of all the support services that are required for a business organization to expand, at an affordable expense.
                </p>
                <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">You focus on the profit making while we rescue you from the hassles of additional responsibilities. Let us simplify your workload…</p>
            </div>
          </div>
        </div>
        <div className="see-all-btn-wrap text-center mt--60">
          <Link className="tmp-btn hover-icon-reverse radius-round" href={`/contact-us`} aria-label="Contact Us">
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
    </section>
  );
}