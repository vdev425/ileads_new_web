import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import CommonComponents from "@/components/common/CommonComponents";
import Gallery from "@/components/common/Gallery";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Life at Bengaluru Office & Work Environment | iLeads",
  description: "Discover the vibrant culture at iLeads Bengaluru with snapshots of teamwork, innovation, and a modern office setup in our gallery.",
  path: "life-at-ileads-bengaluru",
});

const slides = [
{ src: "/assets/images/Gallery/Bengaluru/IMG-01.jpg", alt:"Bengaluru Office iLeads images 1" },
{ src: "/assets/images/Gallery/Bengaluru/IMG-02.jpg", alt:"Bengaluru Office iLeads images 2"  },
{ src: "/assets/images/Gallery/Bengaluru/IMG-03.jpg", alt:"Bengaluru Office iLeads images 3" },
{ src: "/assets/images/Gallery/Bengaluru/IMG-04.jpg", alt:"Bengaluru Office iLeads images 4" },
{ src: "/assets/images/Gallery/Bengaluru/IMG-05.jpg", alt:"Bengaluru Office iLeads images 5" },
{ src: "/assets/images/Gallery/Bengaluru/IMG-06.jpg", alt:"Bengaluru Office iLeads images 6" },
{ src: "/assets/images/Gallery/Bengaluru/IMG-07.jpg", alt:"Bengaluru Office iLeads images 7" },
{ src: "/assets/images/Gallery/Bengaluru/IMG-08.jpg", alt:"Bengaluru Office iLeads images 8" },
{ src: "/assets/images/Gallery/Bengaluru/IMG-09.jpg", alt:"Bengaluru Office iLeads images 9" },
{ src: "/assets/images/Gallery/Bengaluru/IMG-10.jpg", alt:"Bengaluru Office iLeads images 10" },
{ src: "/assets/images/Gallery/Bengaluru/IMG-11.jpg", alt:"Bengaluru Office iLeads images 11" },
{ src: "/assets/images/Gallery/Bengaluru/IMG-12.jpg", alt:"Bengaluru Office iLeads images 12" },
{ src: "/assets/images/Gallery/Bengaluru/IMG-13.jpg", alt:"Bengaluru Office iLeads images 13" },
{ src: "/assets/images/Gallery/Bengaluru/IMG-14.jpg", alt:"Bengaluru Office iLeads images 14" },
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
                  <h1 className="title split-collab">Bengaluru</h1>
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
                    <li className="tmp-breadcrumb-item active">Bengaluru</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="service-area tmp-section-gapTop tmp-section-gapBottom">
            <div className="container">
                <div className="section-head mb--50">
                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Gallery – Bengaluru Office</h2>
                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">iLeads extends its operations into Karnataka, with a branch located in Bengaluru. Bengaluru, often referred to as the Silicon Valley of India, is renowned for its thriving IT industry, vibrant startup ecosystem, and cosmopolitan culture, making it an ideal location for our business’s market penetration and progressive development.</p>
                </div>
                <Gallery images={slides} />
            </div>
        </section>
        <Footer1 /> <CommonComponents />
      </div>
    
  );
}
