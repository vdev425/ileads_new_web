import React from "react";
import Image from "next/image";
import { blogData8 } from "@/data/blogs";

import Link from "next/link";
export default function Blogs4({ isLight = false }) {
  return (
    <div className="tmp-blog-area tmp-section-gapTop tmp-section-gapBottom" id="blog">
      <div className="container">
        <div className="inner">
          <div className="section-head text-align-left mb--50">
            <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
              Videos
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
              Watch the Latest Highlights
            </h3>
            <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
              Watch our videos to get a visual glimpse into the world of iLeads. From our virtual tour to behind-the-scenes looks at our operations, our videos showcase our commitment to excellence and innovation in business support services.
            </p>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 mb--30">
                <video 
                    width="100%" 
                    height="auto" 
                    controls 
                    loop 
                    muted 
                    playsInline
                >
                    <source src="/assets/documents/video.mp4" type="video/mp4" />
                </video>
                <h4 className="blog-title mt--15"><a href="https://www.ileads.co.in/assets/documents/video.mp4" target="_blank">Symbol of Excellence | iLeads Auxiliary Services</a></h4>
            </div>

            <div className="col-lg-3 mb--30">
                <iframe src="https://www.youtube.com/embed/0g92z03gSYY?si=bUBvJVIYX-Gdi0Y8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4 className="blog-title mt--15"><a href="https://www.youtube.com/embed/0g92z03gSYY?si=bUBvJVIYX-Gdi0Y8" target="_blank">What does iLeads stand for?</a></h4>
            </div>

            <div className="col-lg-3 mb--30">
                <iframe src="https://www.youtube.com/embed/V9yjszpURUQ?si=ONN4xhz46qrf4kPI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4 className="blog-title mt--15"><a href="https://www.youtube.com/embed/V9yjszpURUQ?si=ONN4xhz46qrf4kPI" target="_blank">Welcome to iLeads</a></h4>
            </div>

            <div className="col-lg-3 mb--30">
                <iframe src="https://www.youtube.com/embed/yH6kylsKDDI?si=7FkL9uCpV4AniKrU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4 className="blog-title mt--15"><a href="https://www.youtube.com/embed/yH6kylsKDDI?si=7FkL9uCpV4AniKrU" target="_blank">Why iLeads?</a></h4>
            </div>

            <div className="col-lg-3 mb--30">
                <iframe src="https://www.youtube.com/embed/grjdLmF7dYc?si=AkhOuGGy7U6r-gOq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4 className="blog-title mt--15"><a href="https://www.youtube.com/embed/grjdLmF7dYc?si=AkhOuGGy7U6r-gOq" target="_blank">The Virtual Tour</a></h4>
            </div>

            <div className="col-lg-3 mb--30">
                <iframe src="https://www.youtube.com/embed/xwhDRuJlCMc?si=_dNr6noFkGeaNqKG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4 className="blog-title mt--15"><a href="https://www.youtube.com/embed/xwhDRuJlCMc?si=_dNr6noFkGeaNqKG" target="_blank">Become a Part of iLeads Auxiliary Service Pvt Ltd</a></h4>
            </div>

            <div className="col-lg-3 mb--30">
                <iframe src="https://www.youtube.com/embed/B74nudkYC0s?si=DQnhTkv3M3Qlqrx0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4 className="blog-title mt--15"><a href="https://www.youtube.com/embed/B74nudkYC0s?si=DQnhTkv3M3Qlqrx0" target="_blank">iLeads Auxiliary Services</a></h4>
            </div>

            <div className="col-lg-3 mb--30">
                <iframe src="https://www.youtube.com/embed/BhtlA3faJio?si=BuF2Sj23QNnaoEL6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4 className="blog-title mt--15"><a href="https://www.youtube.com/embed/BhtlA3faJio?si=BuF2Sj23QNnaoEL6" target="_blank">About iLeads Auxiliary Services Private Limited</a></h4>
            </div>

            <div className="col-lg-3 mb--30">
                <iframe src="https://www.youtube.com/embed/wMafNj_MN7M?si=v2RG8Yvp6D9Xsqoc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4 className="blog-title mt--15"><a href="https://www.youtube.com/embed/wMafNj_MN7M?si=v2RG8Yvp6D9Xsqoc" target="_blank">iLeads Auxiliary Services PVT LTD</a></h4>
            </div>

            <div className="col-lg-3 mb--30">
                <iframe src="https://www.youtube.com/embed/xPAU_zidTf4?si=AoYt3FpJDjw7wp-Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4 className="blog-title mt--15"><a href="https://www.youtube.com/embed/xPAU_zidTf4?si=AoYt3FpJDjw7wp-Y" target="_blank">ileads Auxiliary Services PVT LTD Services</a></h4>
            </div>

            <div className="col-lg-3 mb--30">
                <iframe src="https://www.youtube.com/embed/ZCTf7kg44Ig?si=O4pWVpC_899tX4j7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4 className="blog-title mt--15"><a href="https://www.youtube.com/embed/ZCTf7kg44Ig?si=O4pWVpC_899tX4j7" target="_blank">iLeads Auxiliary Services Pvt Ltd Video</a></h4>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
