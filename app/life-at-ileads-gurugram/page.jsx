import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import CommonComponents from "@/components/common/CommonComponents";
import Gallery from "@/components/common/Gallery";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Life at Gurugram Office & Team Moments | iLeads",
  description: "Explore iLeads Gurugram’s modern workspace, energetic teams, and collaborative culture through our engaging office gallery moments.",
  path: "life-at-ileads-gurugram",
});

const slides = [
{ src: "/assets/images/Gallery/Gurugram/IMG-01.jpg", alt:"Gurugram Office Gallery Images 1" },
{ src: "/assets/images/Gallery/Gurugram/IMG-02.jpg", alt:"Gurugram Office Gallery Images 2"  },
{ src: "/assets/images/Gallery/Gurugram/IMG-03.jpg", alt:"Gurugram Office Gallery Images 3" },
{ src: "/assets/images/Gallery/Gurugram/IMG-04.jpg", alt:"Gurugram Office Gallery Images 4" },
{ src: "/assets/images/Gallery/Gurugram/IMG-05.jpg", alt:"Gurugram Office Gallery Images 5" },
{ src: "/assets/images/Gallery/Gurugram/IMG-06.jpg", alt:"Gurugram Office Gallery Images 6" },
{ src: "/assets/images/Gallery/Gurugram/IMG-07.jpg", alt:"Gurugram Office Gallery Images 7" },
{ src: "/assets/images/Gallery/Gurugram/IMG-08.jpg", alt:"Gurugram Office Gallery Images 8" },
{ src: "/assets/images/Gallery/Gurugram/IMG-09.jpg", alt:"Gurugram Office Gallery Images 9" },
{ src: "/assets/images/Gallery/Gurugram/IMG-10.jpg", alt:"Gurugram Office Gallery Images 10" },
];

export default function page() {
  return (

      <div className="about inner">
        <Header1 />
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h1 className="title split-collab">Gurugram</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/life-at-ileads`}>Life at iLeads</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Gurugram</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="service-area tmp-section-gapTop tmp-section-gapBottom">
            <div className="container">
                <div className="section-head mb--50">
                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Gallery – Gurugram Office</h2>
                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">iLeads has strategically expanded into Haryana, with branches in Gurugram, Rohtak, Ambala, and Panipat. Haryana, located in close proximity to the national capital, is known for its industrialization and infrastructural development, making it an ideal location for our business’s expansion and growth.</p>
                </div>
                <Gallery images={slides} />
            </div>
        </section>
        <Footer1 /> <CommonComponents />
      </div>
    
  );
}
