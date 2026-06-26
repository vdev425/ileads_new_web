import React from "react";
import Image from "next/image";

export default function DynamicServices({
    subTitle = "",
    title = "",
    description = "",
    serviceCard = [],
    cardHeadClass = ""
}) {
  return (
    <div className="tmp-service-area tmp-section-gapTop tmp-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head mb--50">
              <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span className="subtitle">{subTitle}</span>
              </div>
              <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                {title}
              </h2>
              <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className={`about-us-section-card row g-5 ${cardHeadClass}`}>
          {serviceCard.map((card, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
              <div
                className={`about-us-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-${card.animationOrder}`}
              >
                <div className="card-head">
                  <div className="logo-img">
                    {card.iconImg 
                    ? <Image src={card.iconImg} width={30} height={30} alt={card.title} /> 
                    : <i className={card.iconClass}></i>
                  }
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                </div>
                <p className="card-para">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
