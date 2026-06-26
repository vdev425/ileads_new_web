import React from "react";
import Image from "next/image";
import Link from "next/link";
import { gurugramreception } from "@/data/portfolio";

export default function Projects({ isLight = false }) {
    return (
        <section className="tmp-latest-portfolio">
            <div className="">
                <h2 className="title">Gurugram - Reception</h2>
                <p className="docs mb-5">A modern training and conference room in Dehradun, designed to foster collaboration and learning. Equipped with state-of-the-art technology, ergonomic seating, and flexible layouts, it provides an ideal environment for workshops, meetings, and seminars. The space is thoughtfully designed to enhance productivity and creativity, making it perfect for corporate events and educational sessions.</p>
                <div className="row">
                    {gurugramreception.map((item) => (
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
                        Reception Floors:
                    </h2>
                    <p className="docs">To ensure a safe, secure, and organized environment, Reception has the following guidelines:</p>
                    <ul>
                        <li>
                            <div className="check-box-wrap">
                                <ul>
                                    <li>
                                        <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                                            <span>
                                                <i className="fa-solid fa-circle-check" />
                                            </span>
                                            Visitor Registration: All visitors are required to register at the security desk upon arrival.
                                        </h4>
                                    </li>
                                    <li>
                                        <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                                            <span>
                                                <i className="fa-solid fa-circle-check" />
                                            </span>
                                            Biometric Access: Employees must use the biometric system to enter and exit the premises.
                                        </h4>
                                    </li>
                                    <li>
                                        <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                                            <span>
                                                <i className="fa-solid fa-circle-check" />
                                            </span>
                                            Interview Cabins: Designated seating is available for interview candidates in the reception area. Please wait here until called for your interview.
                                        </h4>
                                    </li>
                                    <li>
                                        <h4 className="check-box-item align-items-start fw-normal docs mb--0">
                                            <span>
                                                <i className="fa-solid fa-circle-check" />
                                            </span>
                                            Restricted Areas: Access to the production floor and storeroom is strictly limited to authorized personnel.
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
