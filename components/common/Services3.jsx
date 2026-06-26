import React from "react";
import Image from "next/image";
import { services5 } from "@/data/services";
export default function Services3() {
  return (
    <section className="latest-service-area tmp-section-gapTop tmp-section-gapBottom" id="service">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">What We Do</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Customers require any support services.
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            We provides all our business partners with flexible and customized plans, as per their requirements, to fit their business needs.
          </p>
        </div>
        <div className="row">
          
            {services5.map((service, index) => (
              <div className="col-lg-4">
              <div
                key={index}
                className={`service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in h-100 animation-order-${
                  index + 1
                }`}
              >
                <h2 className="service-card-num">
                  {/* <span>{`0${index + 1}.`}</span> */}
                  {service.title}
                </h2>
                <p className="service-para">{service.description}</p>
              </div>
              </div>
            ))}
          {/* <div className="col-lg-6">
            <div className="service-card-user-image">
              <Image
                className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                alt="latest-user-image"
                src="/assets/images/services/ileads-callcenter-2.png"
                width={1134}
                height={1176}
              />
            </div>
          </div> */}
        </div>
        <div className="text-center mt--40">
          <a href="/our-services" className="btn btn-sm tmp-btn fs-4 radius-round hover-shape">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
