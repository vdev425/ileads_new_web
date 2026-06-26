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
"Acko extended their outsourcing with Backup process by name “Parts Manager” with 12 FTEs."
]
},
{ 
year: "2025", 
monthdetail: "June",
list: [
"Acko General Insurance with Ileads Partnership gave ramp up of 200 seats at Bangalore location where current billable count is 265 by September 2025.",
]
},
{ 
year: "2025", 
monthdetail: "May",
list: [
"Started Cars24 C2B Business with 20 seats where we coordinated with dealers for used cars.",
]
},
{ 
year: "2025", 
monthdetail: "March",
list: [
  "Credgenics collection business started with 20 seats and currently at 40 Billable FTEs."
]
},
{ 
  year: "2025", 
  monthdetail: "Jaunary",
  list: [
    "Started 99 Acres process with 6 seats and currently at 9 Billable FTEs."
  ] 
},
{ 
  year: "2024", 
  monthdetail: "December",
  list: [
    "Estailo - Fashion Brand of The Guardian Group started their Sales & Customer Support with 9 Billable FTEs."
  ]
},
{ 
  year: "2024", 
  monthdetail: "September",
  list: [
    "First International Business - Noon from Emaar Group started their customer support for Minutes, Core & Food with 15 FTEs and currently at 100 Billable FTEs."
  ]
},
{ 
  year: "2024", 
  monthdetail: "May",
  list: [
    "TVS Credit started their operations at Bangalore with 15 Seats and currently at 25 Billable FTEs."
  ]
},
{ 
  year: "2024", 
  monthdetail: "April",
  list: [
    "PVR Vernacular LOB of Gurgaon started at Bangalore with 12 FTEs."
  ]
},
{ 
  year: "2024", 
  monthdetail: "january",
  list: [
    "INDKAL - authorized partner for Acer, Black n Decker & Wobble started their Customer Service with 30 FTEs and currently at 50 Billable FTEs.",
    "Visithealth started its operations with 15 FTEs for their appointment booking."
  ]
},
{ 
  year: "2023", 
  monthdetail: "December",
  list: [
    "Started Sodexo Meal Benefit Gift Card Process with 10 FTEs at Bangalore and currently running successfully with 12 FTEs.",
    "NU (Arzoo) started their Home Appliance Customer Service with 10 FTEs at Bangalore."
  ]
},
{ 
  year: "2023", 
  monthdetail: "November",
  list: [
    "Acko General Insurance with Ileads Partnership started their Sales with 15 seats and currently at 100 FTEs and extended their Operations in Noida with 70 Billable FTEs."
  ]
},
{ 
  year: "2023", 
  monthdetail: "September",
  list: [
    "Snapdeal Vernacular LOB of Dehradun started with 15 seats and currently at 25 Billable FTEs."
  ]
},
{ 
  year: "2023", 
  monthdetail: "August",
  list: [
    "Started Motherhood process with 20 seats and currently at 68 Billable FTEs."
  ]
},
];

  return (
    <div className="">
      <h2 className="mb-4 title">Ileads Bangalore was inaugurated</h2>
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
