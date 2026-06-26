// components/HorizontalTimeline.js
"use client";

import { useRef } from "react";

export default function HorizontalTimeline() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250; // adjust as needed
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const timelineData = [
{ 
year: "2025", 
list: [
"Stay Tuned for More Updates!"
]
},
{ 
year: "2024", 
list: [
"Expanded to 2,500+ employees across multiple locations.",
"Collaborated on 8+ major government projects.",
"Opened two new offices in Noida and Mumbai to strengthen operations and client reach.",
"Focused on seamless processes, technology integration, and improved customer experience."
]
},
{ 
year: "2023", 
list: [
"Added 10 new clients.",
"Opened offices in Gurgaon & Bangalore",
"Acquired a 500-seater BPO in Gurgaon"
]
},
{ 
year: "2022", 
list: [
"iLeads grows to 2000+ employees.",
"We Begin a new E-governance department",
"iLeads add to new center",
"E-satisfaction survey."
]
},
{ 
year: "2021", 
list: [
"ISO 27001:2019 Certification.",
"Expansion & growth, team size reaches 788 happy employees",
"The Second Office has been added."
]
},
{ 
year: "2020", 
list: [
  "Expanded operations & grew to a strong team of 375.",
  "Confederation of Indian Industry Recognizes Heads."
]
},
{ 
  year: "2019", 
  list: [
    "ISO 9001:2015 Certification",
    "Grew to 240 team members.",
    "Udyog Aadhar",
    "Recognized by startup India & startup Uttarakhand",
    "Recognized by the Department of Promotion of Industry & Internal Trade."
  ] 
},
{ 
  year: "2018", 
  list: [
    "iLeads becomes a Private Limited Company.",
    "We move into a 25000 sq. ft. multi-story building."
  ]
},
{
  year: "2017",
  list: [
    "Company Grows to over 120 Employees.",
  ]
},
];

  return (
    <section className="tmp-section-gapTop tmp-section-gapBottom" id="home-evolution">
    <div className="container">
        <div className="text-center mb-5 section-head justify-content-center row">
            <div className="col-lg-12">
                <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1" animation-end=""><span className="subtitle">How We’ve Grown, Innovated, and Transformed Over the Years</span></div>
                <h2 className="mb-4 title">Our Company's Evolution</h2>
                <p className="docs description ">From humble beginnings to a trusted industry leader, our journey reflects growth, innovation, and resilience. Over the years, we have embraced change, expanded our expertise, and consistently delivered value to our clients while staying true to our core principles.</p>
            </div>
        </div>
      {/* Navigation Arrows */}
      <div className="project-details-swiper-wrapper">
        <div className="d-flex justify-content-between align-items-center mb-3 project-details-swiper-btn TimelineArrow">
          <span className="project-swiper-button-prev" onClick={() => scroll("left")}>
            <i className="fa-solid fa-arrow-left" />
          </span>
          <span className="project-swiper-button-prev" onClick={() => scroll("right")}>
            <i className="fa-solid fa-arrow-right" />
          </span>
        </div>
      </div>

      {/* Timeline Scroll */}
      <div
        ref={scrollRef}
        className="timeline-scroll d-flex position-relative overflow-auto"
      >
        {/* Horizontal Line */}
        <div
          className="position-absolute top-50 start-0 border-top border-2"
          style={{ zIndex: 1 }}
        ></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className="timeline-item flex-shrink-0 d-flex flex-column align-items-center mx-4"
          >
            {/* Circle */}
            <div
              className="bg-primary TimelineDate text-white rounded-circle d-flex justify-content-center align-items-center mb-2 docs"
              style={{ width: "70px", height: "70px", zIndex: 2 }}
            >
              {item.year}
            </div>
            {/* Description */}
            <div className="check-box-wrap">
                <ul>{item.list.map((point, idx) => (
                  <li key={idx}>
                    
                    <p className="check-box-item align-items-start fw-normal docs">
                      <span>
                        <i className="fa-solid fa-circle-check" />
                      </span>
                      {point}
                    </p>
                    
                  </li>
                ))}
                  
                </ul>
              </div>
            {/* Description */}
            {/* <p className="mt-2 docs check-box-wrap">
              <ul>
                <h4 class="check-box-item">
                {item.list.map((point, idx) => (
                  <li key={idx}>
                    <span><i className="fa-solid fa-circle-check"></i></span> {point}
                  </li>
                ))}
                </h4>
              </ul>
            </p> */}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
