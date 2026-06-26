import React from "react";
import Image from "next/image";
import { serviceCards2 } from "@/data/services";
export default function Services4() {
  return (
    <section className="latest-service-area tmp-section-gapTop tmp-section-gapBottom" id="service">
      <div className="container">
        
        <div className="row">
          <div className="col-lg-6">
          <div className="section-head mb--50 text-start">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1 justify-content-start ">
            <span className="subtitle text-start">About Our Company</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Driven by Innovation, Defined by Trust
          </h2>
          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
            iLeads is one of the fastest-growing and leading BPO/KPO/ITES industry-based companies in the nation. Started in 2010, in the Dehradun region, our company has grown successfully over the years to become one of the most experienced teams in Data, Business and Call Processing works. We are proud to be recognized by both Start Up India as well as Start Up Uttarakhand and the winner of the 2020 Best Start Up by the Chamber of Commerce & Industry of India.

            Headquartered in Dehradun, Uttarakhand, iLeads combines advanced technology, skilled professionals, and customer-centric strategies to deliver measurable results. Our services span across Customer Support, Sales & Lead Generation, Chat and Email Support, Data Processing, OCR Services, Cybersecurity Solutions, and Business Consulting, making us a one-stop solution for end-to-end business operations.
            </p>
            <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
              At iLeads, we believe in people — our clients, our employees, and our community. We foster a culture of growth, teamwork, and accountability, where ideas are valued, and success is shared. As we continue to expand our reach and capabilities, our mission remains clear: to help businesses grow smarter, perform better, and lead with confidence.
            </p>
        </div>
          </div>
          {/* <div className="col-lg-6">
            {serviceCards2.map((card, index) => (
              <div
                key={index}
                className={`service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${
                  index + 1
                }`}
              >
                <h2 className="service-card-num">
                  <span>{card.number}</span>
                  {card.title}
                </h2>
                <p className="service-para">{card.description}</p>
              </div>
            ))}
          </div> */}
          <div className="col-lg-6">
            <div className="bg-benner-img-six service-card-user-image">
              <Image
                className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                alt="About Our Company"
                src="/assets/images/home-01/about-img-1.png"
                width={1134}
                height={1176}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
