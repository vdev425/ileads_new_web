import React from "react";

import { services } from "@/data/services";

import Link from "next/link";
export default function Services({ isLight = false }) {
  return (
    <section className="service-area tmp-section-gap">
      <div className="container">
        <div>
          <div className="row section-head justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center mb-4">
              <h2>Business Process Management</h2>
              <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">iLeads stands out as a rapidly expanding provider of Business Process Management (BPM) Services within the country. As a homegrown entity, we exclusively cater to the domestic market, leveraging our specialisation in comprehending the unique needs of all clients. Distinguished by an innovative and distinctive approach, iLeads, as a startup, sets itself apart from others in the dynamic business process management landscape. Our methodology is unique, offering a fresh perspective in a market characterised by constant change. Contrary to being a conventional call centre, iLeads transcends traditional roles by delivering a comprehensive suite of business support services. Our commitment lies in enabling your business to thrive and operate seamlessly, freeing you from the complexities of AUXILIARY aspects.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {services.map((service) => (
            <div className="col-lg-4 col-md-4 col-sm-6" key={service.id}>
              <div
                className={`service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-${service.animationOrder} tmp-link-animation`}
              >
                <div className="service-card-icon">
                  <i className={service.icon} />
                </div>
                <h3 className="service-title">
                  {service.title}
                </h3>
                <p className="service-para px-3">{service.projects}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
