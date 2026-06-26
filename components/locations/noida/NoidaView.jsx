import React from "react";
import Image from "next/image";
import Link from "next/link";
import { noidaoverview } from "@/data/portfolio";

export default function Projects({ isLight = false }) {
  return (
    <section className="tmp-latest-portfolio">
      <div className="">
        <h2 className="title">Noida - Training & Conference Room</h2>
        <p className="docs mb-5">A modern training and conference room in Dehradun, designed to foster collaboration and learning. Equipped with state-of-the-art technology, ergonomic seating, and flexible layouts, it provides an ideal environment for workshops, meetings, and seminars. The space is thoughtfully designed to enhance productivity and creativity, making it perfect for corporate events and educational sessions.</p>
        <div className="row">
          {noidaoverview.map((item) => (
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
            Training and Conference Room Facilities:
          </h2>
          <p className="docs">Our facility includes modern, fully equipped spaces designed to support learning, collaboration, and strategic discussions:</p>
          <ul>
            <li>
              <strong>Training Room:</strong> A well-equipped space designed to foster learning, skill development, and collaboration. Our training room offers modern facilities, flexible seating arrangements, and advanced audio-visual support — making it ideal for workshops, seminars, and team training sessions.
              <div className="check-box-wrap">
                <ul>
                  <li>
                    <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                      <span>
                        <i className="fa-solid fa-circle-check" />
                      </span>
                      Capacity: 25 seats.
                    </h4>
                  </li>
                  <li>
                    <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                      <span>
                        <i className="fa-solid fa-circle-check" />
                      </span>
                      Equipment: A high-quality projector for presentations and interactive sessions.
                    </h4>
                  </li>
                  <li>
                    <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                      <span>
                        <i className="fa-solid fa-circle-check" />
                      </span>
                      Laptops: Provided for hands-on practice during training programs, ensuring a comprehensive learning experience.
                    </h4>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <strong>Conference Room:</strong> A modern, professional space built for impactful discussions and decision-making. Our conference room is equipped with state-of-the-art technology, comfortable seating, and a collaborative environment — perfect for board meetings, client interactions, and strategic sessions.
              <div className="check-box-wrap">
                <ul>
                  <li>
                    <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                      <span>
                        <i className="fa-solid fa-circle-check" />
                      </span>
                      Capacity: 12 seats.
                    </h4>
                  </li>
                  <li>
                    <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                      <span>
                        <i className="fa-solid fa-circle-check" />
                      </span>
                      Purpose: A professional space ideal for team meetings, client discussions, and strategic planning sessions.
                    </h4>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
