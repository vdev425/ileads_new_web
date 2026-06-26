import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import CommonComponents from "@/components/common/CommonComponents";
import Gallery from "@/components/common/Gallery";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Life at Mumbai Office & Team Experience | iLeads",
  description: "Experience iLeads Mumbai through our gallery featuring teamwork, creativity, and a collaborative office environment that drives growth.",
  path: "life-at-ileads-mumbai",
});

const slides = [
{ src: "/assets/images/Gallery/Mumbai/IMG-01.jpg", alt:"Mumbai Reception" },
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
                  <h1 className="title split-collab">Mumbai</h1>
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
                    <li className="tmp-breadcrumb-item active">Mumbai</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="service-area tmp-section-gapTop tmp-section-gapBottom">
            <div className="container">
                <div className="section-head mb--50">
                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Gallery – Mumbai Office</h2>
                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">iLeads extends its operations into Maharashtra, with a branch located in Mumbai. Mumbai, often referred to as the Silicon Valley of India, is renowned for its thriving IT industry, vibrant startup ecosystem, and cosmopolitan culture, making it an ideal location for our business’s market penetration and progressive development.</p>
                </div>
                <Gallery images={slides} />
            </div>
        </section>
        <Footer1 /> <CommonComponents />
      </div>
    
  );
}
