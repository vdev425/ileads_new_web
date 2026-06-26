import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bengalurualloverview } from "@/data/portfolio";

export default function Projects({ isLight = false }) {
  return (
    <section className="tmp-latest-portfolio">
      <div className="">
        <h2 className="title">Bengaluru - Production Floor</h2>
        <p className="docs mb-5">A modern training and conference room in Dehradun, designed to foster collaboration and learning. Equipped with state-of-the-art technology, ergonomic seating, and flexible layouts, it provides an ideal environment for workshops, meetings, and seminars. The space is thoughtfully designed to enhance productivity and creativity, making it perfect for corporate events and educational sessions.</p>
        <div className="row">
          {bengalurualloverview.map((item) => (
            <div
              key={item.id} // Use the unique ID as the key
              className="col-lg-4 col-md-6 col-12" // Static column classes
            >
              <div className="latest-portfolio-card v5 tmp-hover-link">
                {" "}
                {/* Static card classes */}
                <div className="portfoli-card-img">
                  {" "}
                  {/* Static img container classes */}
                  <div className="img-box v1">
                    {" "}
                    {/* Static img box classes */}
                    {/* Link wrapper around images - href is static */}
                    
                      {/* Image Primary - dynamic src, alt, width, height */}
                      <Image
                        className="img-primary hidden-on-mobile"
                        alt={item.title} // Using item.title for alt
                        src={item.imageSrc}
                        width={item.width} // Using width from data
                        height={item.height} // Using height from data
                      />
                      {/* Image Secondary - dynamic src, alt, width, height */}
                      <Image
                        className="img-secondary"
                        alt={item.title} // Using item.title for alt
                        src={item.imageSrc}
                        width={item.width} // Using width from data
                        height={item.height} // Using height from data
                      />
                  </div>
                  {/* Icon Link after img-box - static href, classes, icon */}
                  {/* Included for all items, matching examples 2-4 */}
                  
                </div>
                
              </div>
            </div>
          ))}
        </div>
        <div className="section-head text-align-left mb--50 mt--50 docs">
                  <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
                    Production Floors:
                  </h2>
                  <p className="docs">Our state-of-the-art production floors are designed to maximize efficiency and accommodate business needs with the following layout</p>
                  <ul>
                    <li>
                      <strong>First Floor - Maruti Chambers</strong>
                      <div className="check-box-wrap">
                        <ul>
                          <li>
                            <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                              <span>
                                <i className="fa-solid fa-circle-check" />
                              </span>
                              Seating Capacity: 251 seats.
                            </h4>
                          </li>
                          <li>
                            <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                              <span>
                                <i className="fa-solid fa-circle-check" />
                              </span>
                              Seat Dimensions:  3x2 layout, offering a spacious and comfortable workspace for employees.
                            </h4>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <strong> Fourth Floor - Maruti Chambers 2:</strong>
                      <div className="check-box-wrap">
                        <ul>
                          <li>
                            <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                              <span>
                                <i className="fa-solid fa-circle-check" />
                              </span>
                              Seating Capacity: 422 seats.
                            </h4>
                          </li>
                          <li>
                            <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                              <span>
                                <i className="fa-solid fa-circle-check" />
                              </span>
                              Seat Dimensions:<br />
                              1: 103 seats with a 4x3 layout for larger workstations.
                                <br />
                             2: 319 seats with a 2x2 layout for optimized workspace allocation.
                            </h4>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="section-head text-align-left mb--50 mt--50 docs">
                  <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
                    Additional Features:
                  </h2>
                  <ul>
                    <li>
                      <div className="check-box-wrap">
                        <ul>
                          <li>
                            <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                              <span>
                                <i className="fa-solid fa-circle-check" />
                              </span>
                              All systems are fully configured to meet specific business requirements.
                            </h4>
                          </li>
                          <li>
                            <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                              <span>
                                <i className="fa-solid fa-circle-check" />
                              </span>
                              Wi-Fi connectivity is available across the floors, ensuring seamless access to digital resources.
                            </h4>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <p>These facilities are designed to create a productive and tech-enabled working environment for our team.</p>
                </div>


      </div>
    </section>
  );
}
