import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import CommonComponents from "@/components/common/CommonComponents";
import Gallery from "@/components/common/Gallery";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Life at Noida Workplace & Culture Highlights | iLeads",
  description: "See life at iLeads Noida with friendly office vibes, strong team spirit, and everyday workplace moments captured in our photo gallery.",
  path: "life-at-ileads-noida",
});

const slides = [
{ src: "/assets/images/Gallery/Noida/IMG-01.jpg", alt:"Noida iLeads Office Images 1" },
{ src: "/assets/images/Gallery/Noida/IMG-02.jpg", alt:"Noida iLeads Office Images 2"  },
{ src: "/assets/images/Gallery/Noida/IMG-03.jpg", alt:"Noida iLeads Office Images 3" },
{ src: "/assets/images/Gallery/Noida/IMG-04.jpg", alt:"Noida iLeads Office Images 4" },
{ src: "/assets/images/Gallery/Noida/IMG-05.jpg", alt:"Noida iLeads Office Images 5" },
{ src: "/assets/images/Gallery/Noida/IMG-06.jpg", alt:"Noida iLeads Office Images 6" },
{ src: "/assets/images/Gallery/Noida/IMG-07.jpg", alt:"Noida iLeads Office Images 7" },
{ src: "/assets/images/Gallery/Noida/IMG-08.jpg", alt:"Noida iLeads Office Images 8" },
{ src: "/assets/images/Gallery/Noida/IMG-09.jpg", alt:"Noida iLeads Office Images 9" },
{ src: "/assets/images/Gallery/Noida/IMG-10.jpg", alt:"Noida iLeads Office Images 10" },
{ src: "/assets/images/Gallery/Noida/IMG-11.jpg", alt:"Noida iLeads Office Images 11" },
{ src: "/assets/images/Gallery/Noida/IMG-12.jpg", alt:"Noida iLeads Office Images 12" },
{ src: "/assets/images/Gallery/Noida/IMG-13.jpg", alt:"Noida iLeads Office Images 13" },
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
                  <h1 className="title split-collab">Noida</h1>
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
                    <li className="tmp-breadcrumb-item active">Noida</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="service-area tmp-section-gapTop tmp-section-gapBottom">
            <div className="container">
                <div className="section-head mb--50">
                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Gallery – Noida Office</h2>
                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">iLeads extends its reach to Uttar Pradesh, with a branch in Noida and Moradabad. Uttar Pradesh, India's most populous state, is a hub of economic activity and industrial development, providing ample opportunities for the employees to thrive.</p>
                </div>
                <Gallery images={slides} />
            </div>
        </section>
        <Footer1 /> <CommonComponents />
      </div>
    
  );
}
