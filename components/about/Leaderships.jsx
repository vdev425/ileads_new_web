import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Leadership } from "@/data/portfolio";

export default function OurTeam({ isLight = false }) {
  return (
    <div className="tmp-portfolio-area tmp-section-gapBottom" id="portfolio">
      <div className="container">
        <div className="inner">
          <div className="section-head text-align-left mb--50">
            <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
             Get to Know Our Dynamic Leadership Team
              <span>
                <Image
                  alt="custom-line"
                  src="/assets/images/custom-line/custom-line.png"
                  width={81}
                  height={6}
                />
              </span>
            </h2>
            <h3 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
               Leadership Team
            </h3>
            <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
              At iLeads, our Leadership Team is the driving force that shapes our vision, strategy, and culture. With a blend of experience, innovation, and forward-thinking, they guide the organization toward sustainable growth and global excellence.
            </p>
          </div>
          {Leadership.map((item) => (
            <div className="row mt-0 mb-5">
              <h4>{item.teamName}</h4>
              {item.teamMembers.map((teamMember) => (
                <div className="col-lg-3 col-md-3 col-sm-12" key={teamMember.id}>
                  <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <Image
                      alt={teamMember.altText}
                      src={teamMember.imageSrc}
                      width={410}
                      height={457}
                    />
                    <div className="portfolio-card-content-wrap">
                      <div className="content-left">
                        <p className="portfoli-card-para">{teamMember.description}</p>
                        <h3 className="portfolio-card-title animated fadeIn">
                          {teamMember.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
