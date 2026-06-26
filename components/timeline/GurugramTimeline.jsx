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
monthdetail: "July",
list: [
"The Gurugram site grew from 400 to 639 seats over the last two years — a 60% capacity increase. The business expanded from a single-site setup to two sites, enabling higher flexibility and resilience. Current utilization stands at 70%, indicating room for further growth while sustaining efficiency"
]
},
{ 
year: "2025", 
monthdetail: "June",
list: [
"Strengthened our portfolio with the addition of the FMCG industry, introducing 20 premium seats and achieving 100% center utilization.",
"Expanded into the Insurance Domain with 30 seats, further diversifying our business portfolio.",
"Opened our second center in Gurgaon with 184 seats, reinforcing our growth momentum and expanding overall capacity."
]
},
{ 
year: "2024", 
monthdetail: "September",
list: [
"Ventured into the Aviation Domain and transitioned to a new center with increased capacity of 455 seats, achieving 95% utilization."
]
},
{ 
year: "2024", 
monthdetail: "March - July",
list: [
  "Expanded into the Entertainment Industry with 50 new seats, boosting Center Utilization to 99% of 400-seat capacity.",
  "Entered the Health Care Domain with 15 seats.",
  "Expanded into the Cosmetic & Personal Care Industry with 40 seats."
]
},
{ 
  year: "2023", 
  monthdetail: "August",
  list: [
    "Launched a new 150-seat business in the Consumer Industry, driving overall Center Utilization to 95%."
  ] 
},
{ 
  year: "2023", 
  monthdetail: "July",
  list: [
    "Started the journey with a 400-seat capacity at a single center, operating at 60% utilization."
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
                        
              </div>{item.monthdetail && <div className="docs">{item.monthdetail}</div>}  
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
