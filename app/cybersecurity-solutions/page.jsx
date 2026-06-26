import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import DynamicServices from "@/components/common/DynamicServices";
import {cybersecuritysolutions, cybersecuritysolutions1, cybersecuritysolutions2, cybersecuritysolutions3, cybersecuritysolutions4 } from "@/data/services";
import Footer1 from "@/components/footers/Footer1";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Cybersecurity Solutions – Secure BPO Services | iLeads",
  description: "Protect your data and operations with iLeads’ cybersecurity-enabled BPO and KPO services, ensuring secure and reliable outsourcing solutions.",
  path: "cybersecurity-solutions",
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
                <h1 className="title split-collab">Cybersecurity Solutions</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li className="tmp-breadcrumb-item active">Cybersecurity Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DynamicServices cardHeadClass="OurServices"
        subTitle="Strengthening business resilience with integrated risk and compliance management."
        title="Governance, Risk, and Compliance (GRC) Solutions"
        description="Our GRC Solutions empower organizations to proactively manage risks, ensure regulatory compliance, and establish strong governance frameworks. By combining technology, expertise, and proven processes, we help businesses minimize vulnerabilities, safeguard reputation, and drive sustainable growth."
        serviceCard={cybersecuritysolutions}
      />

      <DynamicServices cardHeadClass="OurServices"
        subTitle="Uncover, analyze, and secure digital evidence with precision."
        title="Cyber Forensics Services"
        description="A cybersecurity service is a professional product, process, or solution that protects devices, networks, and information from cyber threats. Cybersecurity services help organizations prevent unauthorized access, use, disruption, or destruction of sensitive data, systems, or applications."
        serviceCard={cybersecuritysolutions1}
      />

      <DynamicServices cardHeadClass="OurServices"
        subTitle="Proactive monitoring and protection for a safer digital environment."
        title="Managed Security Services"
        description="Managed security services (MSS) are cybersecurity services that help organizations monitor and manage their security systems, devices, and software"
        serviceCard={cybersecuritysolutions2}
      />

      <DynamicServices cardHeadClass="OurServices"
        subTitle="Advanced protection tailored to evolving digital threats."
        title="Specialized Cybersecurity Services"
        description="Specialized cybersecurity services are services that focus on specific areas of cybersecurity, such as network security, application security, or incident response"
        serviceCard={cybersecuritysolutions3}
      />

      <DynamicServices cardHeadClass="OurServices"
        subTitle="Innovative solutions to secure your digital ecosystem."
        title="Our Products"
        description="We offer a suite of advanced cybersecurity products designed to protect businesses from ever-evolving threats. Each solution is built with cutting-edge technology, ensuring robust defense, compliance, and operational resilience."
        serviceCard={cybersecuritysolutions4}
      />

    
      <Footer1 />
      <Copyright /> <CommonComponents />
    </>
  );
}
