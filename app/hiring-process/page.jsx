import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import Footer1 from "@/components/footers/Footer1";
import HiringProcess from "@/components/hiring-process/HiringProcess";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Hiring Process – Join Team | iLeads",
  description: "Learn iLeads’ simple hiring process for BPO, KPO, and call center roles. Apply and grow your career with India’s leading outsourcing firm.",
  path: "hiring-process",
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
                                <h1 className="title split-collab">Hiring Process</h1>
                                <ul className="page-list">
                                    <li className="tmp-breadcrumb-item">
                                        <Link href={`/`}>Home</Link>
                                    </li>
                                    <li className="icon">
                                        <i className="fa-solid fa-angle-right" />
                                    </li>
                                    <li className="tmp-breadcrumb-item active">Hiring Process</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className=" tmp-section-gapTop">
                <div className="container py-5">
                    {/* Page Header */}
                    <div className="section-head mb--50">
                        <h3 className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">Discover how we find the right talent, the right way.</h3>
                        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Our Hiring Process</h2>
                        <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">The iLeads recruiting team does a minimum 4-level screening process which helps us filter and select the Best Possible Candidates in the city of Dehradun and 4 more neighboring urban areas with a medium to high population density. It also helps that Dehradun is known as the City of Education with over 200 Colleges & Educational Institutions surrounding us and giving us a very large workforce pool.</p>
                    </div>
                </div>
            </section>
            <section className=" tmp-section-gapBottom hiringprocess">
                <div className="container py-5">
                    <HiringProcess />
                </div>
            </section>
            <section className="tmp-section-gapBottom">
                <div className="container py-5">
                    

                    <div className="tab-wrapper-overlay-to-top">
                        <div className="position-sticky sticky-top tmp-sticky-top w-100">
                            <ul
                                className="tab-navigation-button style-2 nav tab-smlg nav-pills"
                                id="v-pills-tab"
                                role="tablist"
                            >
                                <li className="nav-item">
                                    <a
                                        className="nav-link tmp-nav active"
                                        id="v-pills-home-tab"
                                        data-bs-toggle="tab"
                                        href="#v-pills-Javascript"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        Training
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link tmp-nav"
                                        id="v-pills-profile-tab"
                                        data-bs-toggle="tab"
                                        href="#v-pills-Design"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        WMMIS 
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link tmp-nav"
                                        id="v-pills-wordpress-tab"
                                        data-bs-toggle="tab"
                                        href="#v-pills-Wordpress"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        Our Competence
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link tmp-nav"
                                        id="v-pills-settings-tabs"
                                        data-bs-toggle="tab"
                                        href="#v-pills-settings"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        Operations
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="tmp-tab-content-area mt--40">
                            
                            <div
                                className="tmp-all-tab-content tab-content"
                                id="v-pills-tabContent"
                            >
                                <div
                                    className="tab-pane fade show active"
                                    id="v-pills-Javascript"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-home-tab"
                                >
                                    <div className="section-head text-align-left mb--50">
                                        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Training</h2>
                                        <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3 para">
                                            We have a dedicated training department that helps in the preparation & progression of each of our newly hired employees & also helps in recognizing & retraining those who require refresher sessions.
                                        </p>
                                    </div>
                                    {/* Start about Area */}
                                    <div className="row g-5">
                                        <div className="col-lg-6 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Voice, Accent & Soft Skills (if required)</h3>
                                            <p className="edu-para">Training to improve communication & customer interaction skills, including accent neutralization & soft skills for engagement & conflict resolution.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Product & Process</h3>
                                            <p className="edu-para">Training on iLeads’s offerings & operational processes, focusing on understanding the client’s needs, troubleshooting & using the tools effectively.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Assessments & Certifications</h3>
                                            <p className="edu-para">Regular evaluation of associates’ product knowledge, process understanding & customer service skills, leading to certifications for performance recognition.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-4">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">On the Job Training (OJT)</h3>
                                            <p className="edu-para">Hands-on training allows the associates to apply learning in real life scenarios, including, shadowing independent query handling, and instant feedback.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End about Area */}
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="v-pills-Design"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-profile-tab"
                                >
                                    <div className="section-head text-align-left mb--50">
                                        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">WMMIS - Workforce Management & Management Information System</h2>
                                        <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3 para">
                                            Optimizing staffing for better efficiency and providing data for informed decisions.
                                        </p>
                                    </div>
                                    <div className="row g-5">
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Relevant Report Publishing</h3>
                                            <p className="edu-para">Publishing the reports timely, pertaining to our operations & performance, such as, productivity reports, quality metrics, and customer satisfaction scores.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Tracking Inflow & Outflow Trend</h3>
                                            <p className="edu-para">Monitoring the trends in the number of the incoming & outgoing customer interactions to identify patterns and make staff adjustments accordingly.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Agent Performance Report</h3>
                                            <p className="edu-para">Providing detailed analysis of individual agent performance, including metrics like call resolution time, customer satisfaction scores and adherence to scripts/ protocols.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-4">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Centralized Attendance Tracking</h3>
                                            <p className="edu-para">Managing & monitoring the associate attendance in a centralized system ensuring accurate record keeping and compliance with company policies.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-4">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Shrinkage & Attrition Tracking</h3>
                                            <p className="edu-para">Monitoring and analyzing employee shrinkage (time spent on non-work activities) and attrition (employee turnover) to identify causes and implement retention strategies.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-4">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Daily Productivity Tracking</h3>
                                            <p className="edu-para">Tracking & analyzing daily productivity metrics, such as, call volume handled, average call handling time, and task completion rates.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-4">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Real Time Monitoring</h3>
                                            <p className="edu-para">Monitoring the on-going operations in real time to ensure smooth workflow, identify issues as they arise, and take immediate corrective actions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="v-pills-Wordpress"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-wordpress-tab"
                                >
                                    {/* Start Portfolio Area */}
                                    <div className="section-head text-align-left mb--50">
                                        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Our Competence</h2>
                                        <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3 para">Mentioned below is our range of specializations & expertise that enables us to deliver our services effectively.
                                        </p>
                                    </div>
                                    <div className="row g-5">
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Dip Check</h3>
                                            <p className="edu-para">Regular assessments to identify any sudden dips or decline in the performance or quality.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Daily Detractor</h3>
                                            <p className="edu-para">Monitoring & addressing daily issues or complaints from the customers that can detract from the overall customer satisfaction.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Standardized Call Audit Marking Scheme</h3>
                                            <p className="edu-para">A set criteria for evaluating the score & quality of the customer calls constantly.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-4">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">RCA (Root Cause Analysis)</h3>
                                            <p className="edu-para">Investigating & addressing the underlying causes of issues or problems to prevent reoccurrence.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-4">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Tracking Parameters</h3>
                                            <p className="edu-para">Specific parameters or metrics to measure & access the performance quality.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-4">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Call Quality Trends</h3>
                                            <p className="edu-para">Monitoring the overall trend in the call quality over time to identify the improvements & declines.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End portfolio Area */}
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="v-pills-settings"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-settings-tabs"
                                >
                                    {/* Start News Area */}
                                    <div className="section-head text-align-left mb--50">
                                        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Operations</h2>
                                        <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3 para">Our operations run round the clock to ensure constant support & service availability.
                                        </p>
                                    </div>
                                    <div className="row g-5">
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Following KPI’s At Agent As Well As LOB Level</h3>
                                            <p className="edu-para">Key Performance Index (KPI) tracked at both, agents & LOB (Life of Business) levels to monitor & improve performance.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Team Member Specifications</h3>
                                            <p className="edu-para">Our team members are carefully selected based on specific criteria to ensure they meet the required standards & skill sets.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Various Language Support Facilities Available</h3>
                                            <p className="edu-para">We offer support in various languages to cater to the needs of the customers.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-4">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Customized Hours of Operation</h3>
                                            <p className="edu-para">We provide flexible hours of operation to meet the unique requirements of our clients.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-4">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Customized Dialer Offering</h3>
                                            <p className="edu-para">Our dialer system can be customized to suit the needs of our clients.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div
                                            className="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-4">
                                            {/* <h4 className="edu-sub-title">Enhancing communication, confidence, and customer interaction</h4> */}
                                            <h3 className="edu-title">Dedicated as well as Shared Staff</h3>
                                            <p className="edu-para">We provide both, dedicated & shared staff to cater to the requirements of our clients.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ENd Mews Area */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer1 />
            <Copyright /> <CommonComponents />
        </>
    );
}