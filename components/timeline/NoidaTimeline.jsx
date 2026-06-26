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
monthdetail: "March",
list: [
"Hero Started in March 2025 with 80 billable FTE",
"Tide Started in March 2025 with 20 FTE"
]
},
{ 
year: "2025", 
monthdetail: "May",
list: [
"Sharda Started in May 2025 with 10 Billable FTE",
]
},
{ 
year: "2024", 
monthdetail: "May",
list: [
"Started in June 2024 with acquisition of R2S with 30 FTE, with Tata PL and CC. Got Ramp of 20 seats of addition new LOB of amity with 20 FTE. Now current FTE in both lob 110 with Additonal ramp of New LOB Housing.com with 10 FTE in aug 2025."
]
},
{ 
year: "2024", 
monthdetail: "May",
list: [
  "May 2024 with 15 FTE and current Billable FTE 150."
]
},
{ 
  year: "2024", 
  monthdetail: "July",
  list: [
    "Purple Started in july 2024 with acquisition of R2S with FTE 20. Now current FTE is 10."
  ] 
},
{ 
  year: "2024", 
  monthdetail: "November",
  list: [
    "CREDGENICS - Started November 2024 with 65 FTE.",
    "Additional LOB of DRA have been lived in march 2025 with 20 FTE, with additional Subsequent ramp of 20 seats. Now Billable FTE for DRA is 55."
  ]
},
{ 
  year: "2024", 
  monthdetail: "December",
  list: [
    "CREDGENICS DIGITAL - Started in December 2024 with 40 FTE, which later got increased with 55 billable FTE."
  ]
},
];

  return (
    <div className="">
      <h2 className="mb-4 title">Ileads Noida was inaugurated</h2>
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
