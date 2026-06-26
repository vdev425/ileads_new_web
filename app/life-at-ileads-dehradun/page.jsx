import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import CommonComponents from "@/components/common/CommonComponents";
import Gallery from "@/components/common/Gallery";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Life at Dehradun Office & Team Culture | iLeads",
  description: "Discover life at iLeads Dehradun with vibrant office moments, teamwork, and a dynamic work environment showcased through our image gallery.",
  path: "life-at-ileads-dehradun",
});

const slides = [
{ src: "/assets/images/Gallery/Dehradun/IMG_01.jpg", alt:"Dehradun Office 1" },
{ src: "/assets/images/Gallery/Dehradun/IMG_02.jpg", alt:"Dehradun Office 2"  },
{ src: "/assets/images/Gallery/Dehradun/IMG_03.jpg", alt:"Dehradun Office 3" },
{ src: "/assets/images/Gallery/Dehradun/IMG_04.jpg", alt:"Dehradun Office 4" },
{ src: "/assets/images/Gallery/Dehradun/IMG_05.jpg", alt:"Dehradun Office 5" },
{ src: "/assets/images/Gallery/Dehradun/IMG_06.jpg", alt:"Dehradun Office 6" },
{ src: "/assets/images/Gallery/Dehradun/IMG_07.jpg", alt:"Dehradun Office 7" },
{ src: "/assets/images/Gallery/Dehradun/IMG_08.jpg", alt:"Dehradun Office 8" },
{ src: "/assets/images/Gallery/Dehradun/IMG_09.jpg", alt:"Dehradun Office 9" },
{ src: "/assets/images/Gallery/Dehradun/IMG_10.jpg", alt:"Dehradun Office 10" },
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
                  <h1 className="title split-collab">Dehradun</h1>
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
                    <li className="tmp-breadcrumb-item active">Dehradun</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="service-area tmp-section-gapTop tmp-section-gapBottom">
            <div className="container">
                <div className="section-head mb--50">
                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Gallery – Dehradun Office</h2>
                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">iLeads has established a strong presence in Uttarakhand, with multiple branches in Dehradun, the capital city. Known for its scenic beauty and vibrant culture, Uttarakhand offers a conducive environment for business growth and innovation. This place serves as a perfect blend of beauty & business.</p>
                </div>
                <Gallery images={slides} />
            </div>
        </section>
        <Footer1 /> <CommonComponents />
      </div>
    
  );
}
