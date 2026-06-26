import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bengaluruserver } from "@/data/portfolio";

export default function Projects({ isLight = false }) {
  return (
    <section className="tmp-latest-portfolio">
      <div className="">
        <h2 className="title">Bengaluru - Server Room</h2>
        <p className="docs mb-5">Our state-of-the-art server room is designed to ensure maximum uptime, security, and performance. Equipped with advanced infrastructure, climate control, and redundant power backup, it provides a reliable environment for data hosting and critical business operations. With 24/7 monitoring and strict security protocols, we ensure your information remains protected and accessible at all times.</p>
        <div className="row">
          {bengaluruserver.map((item) => (
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
            Advanced Server Room Infrastructure:
          </h2>
          <p className="docs">Our server room is equipped with cutting-edge technology to ensure seamless operations, robust security, and high availability. Key features include:</p>
          <ul>
            <li>
              <div className="check-box-wrap">
                <ul>
                  <li>
                    <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                      <span>
                        <i className="fa-solid fa-circle-check" />
                      </span>
                      Sophos XGS Firewall: Providing advanced network protection and threat management for enhanced security.

                    </h4>
                  </li>
                  <li>
                    <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                      <span>
                        <i className="fa-solid fa-circle-check" />
                      </span>
                      Cisco L2 & L3 Switches: Enabling efficient and reliable network performance with Layer 2 and Layer 3 switching capabilities.
                    </h4>
                  </li>
                  <li>
                    <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                      <span>
                        <i className="fa-solid fa-circle-check" />
                      </span>
                      Redundant Internet Lines: Sourced from multiple providers to ensure uninterrupted connectivity and minimize downtime.
                    </h4>
                  </li>
                  <li>
                    <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                      <span>
                        <i className="fa-solid fa-circle-check" />
                      </span>
                      P2P & IPSEC Connectivity: Facilitating secure and reliable communication between sites, ensuring business continuity (BCP).

                    </h4>
                  </li>
                  <li>
                    <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                      <span>
                        <i className="fa-solid fa-circle-check" />
                      </span>
                      Redundant SIP Lines: Procured from different providers for fail-safe communication channels.
                    </h4>
                  </li>
                  <li>
                    <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                      <span>
                        <i className="fa-solid fa-circle-check" />
                      </span>
                      Dell Servers with RAID Configuration: Ensuring data integrity and redundancy for critical operations.
                    </h4>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <p className="docs">This robust infrastructure reflects our commitment to maintaining a secure, efficient, and resilient IT environment to support business growth and operational excellence.
</p>
        </div>
      </div>
    </section>
  );
}
