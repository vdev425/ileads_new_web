import Link from "next/link";
import React from "react";
import SiteMap from "@/components/common/SiteMap";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Sitemap – Navigate all BPO & KPO Services | iLeads",
  description: "Explore all iLeads services, career pages, office locations, and resources easily with the complete sitemap for fast navigation.",
  path: "sitemap",
});

export default function SiteMapPage() {
  return (
    <>
        <Header1 />
        <div className="breadcrumb-area breadcrumb-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-inner text-center">
                            <h1 className="title split-collab">HTML Sitemap</h1>
                            <ul className="page-list">
                                <li className="tmp-breadcrumb-item">
                                    <Link href={`/`}>Home</Link>
                                </li>
                                <li className="icon">
                                    <i className="fa-solid fa-angle-right" />
                                </li>

                                <li className="tmp-breadcrumb-item active">Sitemap</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <SiteMap />
        <Footer1 />
    </>
  );
}