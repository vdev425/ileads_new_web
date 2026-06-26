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
"Working with Paytm, Snapdeal , Mobikwik, Thomas Cook, Beetel, Saathi, Housing, PayGlocal, Naukri, Zandu, Heritage, DBS, Kredit Bee, UPCL, CM-Helpline, Wildlife, Bridcul, Paytm Money headcount increased to 1250+."
]
},
{ 
year: "2024", 
list: [
"Working with Thomas Cook, Indiamart FSF, Kredit Bee, Zandu, Doon Business School, Snapdeal, Paytm , Mobikwik, Limeroad, Heritage, House Ninja, Niddle, Livepure, Viacation , Paytm Money, Bridcul , PWD, Cm-Helpline,  JICA, GMVN, TVS team size increased to 1105"
]
},
{ 
year: "2023", 
list: [
"New Processes add on such as Kredit Bee, GoKwik, Reliance General Insurance , Career Era , Mashdemy, Grassroot, Thomas Cook, Paytm, Snapdeal, Paytm , Money, Doon Business School , Intileo headcount reached to 1075."
]
},
{ 
year: "2021", 
list: [
  "Working with Indiamart Sales & Indiamart FSF,  Bajaj Finserv, Payme India, Toffee Insurance, Cars-24 , Bike-24, NATCO Pharma, Nielsen,  headcount reached to 740."
]
},
{ 
  year: "2018", 
  list: [
    "Started new process Yamaha , Indiamart Sales & Tripoto & True Hab, Writers , Group, Urbint,  headcount reached approximately 425"
  ] 
},
{ 
  year: "2017", 
  list: [
    "Indiamart Sales and Indiamart Tender with 170 headcount."
  ]
},
{
  year: "2010",
  list: [
    "Started Indiamart Catalog Designing   & Product Mapping process with 50 seats.",
  ]
},
];

  return (
    <div className="">
      <h2 className="mb-4 title">Our Company's Evolution</h2>
      <p className="docs">From humble beginnings to a trusted industry leader, our journey reflects growth, innovation, and resilience. Over the years, we have embraced change, expanded our expertise, and consistently delivered value to our clients while staying true to our core principles.</p>

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
                    
                    <h4 className="check-box-item align-items-start fw-normal docs">
                      <span>
                        <i className="fa-solid fa-circle-check" />
                      </span>
                      {point}
                    </h4>
                    
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
  );
}
