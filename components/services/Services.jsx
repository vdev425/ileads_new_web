import React from "react";
import Link from "next/link";
import { services4 } from "@/data/services";

export default function Services({ isLight = false }) {
  return (
    <section className="latest-service-area tmp-section-gap">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Business Process Management Services</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Streamline operations, enhance efficiency, <br />and deliver lasting business value.
          </h2>
          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">For businesses seeking efficient Business Process Management (BPM) services, iLeads Auxiliary Services Private Limited offers tailored solutions for streamlined operations and growth. With round-the-clock operations and competitive pricing, we cater to businesses of all sizes. Serving industries like Global, PSU & Government, E-Commerce, and more, our services include Inbound Customer Support, Seller Support, Outbound Surveys, and Data Science Projects. Recognized by Startup India, we're committed to social responsibility and community support.</p>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            {services4
              .filter((service) => service.column === 1)
              .map((service) => (
                <Link
                  href={`/service-details${isLight ? "-white" : ""}/${
                    service.slug
                  }`}
                  className={`service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${service.animationOrder}`}
                  key={service.id}
                >
                  <h2 className="service-card-num">
                    <span>{service.num}</span>
                    {service.title}
                  </h2>
                  <p className="service-para">{service.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
