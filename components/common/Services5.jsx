import { serviceCards3, serviceCards6 } from "@/data/services";
import React from "react";

export default function Services5({
  parentClass = "tmp-service-area tmp-section-gapTop tmp-section-gapBottom",
}) {
  return (
    <div className={parentClass} id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head mb--50">
              <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span className="subtitle">Building a Culture of Excellence</span>
              </div>
              <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                The Core Values of iLeads
              </h2>
              <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                In today's dynamic business environment, fostering a culture of excellence is paramount for sustained success. At iLeads, we pride ourselves on embodying our core values in everything we do, from client interactions to internal operations. Let's delve into how each of our core values plays a crucial role in shaping our organizational ethos:
              </p>
            </div>
          </div>
        </div>
        <div className="about-us-section-card row g-5">
          {serviceCards3.map((card, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
              <div
                className={`about-us-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-${card.animationOrder}`}
              >
                <div className="card-head">
                  <div className="logo-img">
                    <i className={card.iconClass}></i>
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                </div>
                <p className="card-para">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="about-us-section-card row g-5">
          {serviceCards6.map((card, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
              <div
                className={`about-us-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-${card.animationOrder}`}
              >
                <div className="card-head">
                  <div className="logo-img">
                    <i className={card.iconClass}></i>
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                </div>
                <p className="card-para">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Our Main Purpose Start*/}
      <section>    
        <div className="container">   
          <div className="tmp-service-area tmp-section-gapTop">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-head mb--50">
                  <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="subtitle">Creating Value, Building Trust</span>
                  </div>
                  <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Our Main Purpose
                  </h2>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    The central purpose of our organization is to permit our clients to focus their attention on their business strategies and growth, while we, at iLeads, step up and take care of all the support services that are required for a business organization to expand, at an affordable expense.<br /> <br />

  You focus on the profit making while we rescue you from the hassles of additional responsibilities. Let us simplify your workload…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>         
      </section>
      {/* Our Main Purpose End */}
    </div>
  );
}
