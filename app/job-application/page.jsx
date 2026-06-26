import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import JobApplication from "@/components/job-application/JobApplication";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import Footer1 from "@/components/footers/Footer1";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Job Application | Build Your Future with Us | iLeads",
  description: "Join us in building bridges to success by sharing your details. Together, let's craft a path to a brighter future through this job application. Apply Now!",
  path: "job-application",
});
export default function page() {
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">Job Application</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item active">Job Application</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <JobApplication />

      <Footer1 />
      <Copyright /> <CommonComponents />
    </>
  );
}
