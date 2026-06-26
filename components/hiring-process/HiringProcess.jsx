import React from "react";
import Link from "next/link";
export default function Services({ isLight = false }) {
  return (
    <section className="service-area">
      <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order tmp-link-animation h-100">
              <div className="service-card-icon">
                <i class="fa-light fa-file-magnifying-glass"></i>
              </div>
              <h3 className="service-title">
                <Link href="#">Screening Round</Link>
              </h3>
              <p className="service-para px-3">Our HR team carefully reviews your application to match role requirements. We assess your skills, experience, and cultural fit. Only shortlisted candidates move forward to the next stage.</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order tmp-link-animation h-100">
              <div className="service-card-icon">
                <i class="fa-light fa-brain"></i>
              </div>
              <h3 className="service-title">
                <Link href="#">Aptitude Round</Link>
              </h3>
              <p className="service-para px-3">This round evaluates your logical reasoning, problem-solving, and analytical skills. We design assessments to test how you approach real-world challenges. Strong performance here ensures you move ahead in the selection process. (if required).</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order tmp-link-animation h-100">
              <div className="service-card-icon">
                <i class="fa-light fa-user-headset"></i>
              </div>
              <h3 className="service-title">
                <Link href="#">Voice/Non Voice Round</Link>
              </h3>
              <p className="service-para px-3">MTI check (if required) and Communication Skills Check through one on one Interview and answering questions from our specially curated interview checklist.</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order tmp-link-animation h-100">
              <div className="service-card-icon">
                <i class="fa-light fa-user-gear"></i>
              </div>
              <h3 className="service-title">
                <Link href="#">Operations Round</Link>
              </h3>
              <p className="service-para px-3">This is the decisive stage where we assess your readiness for the role. Your skills, knowledge, and overall fit with our team are evaluated in depth. Successful candidates from this round receive their offer and begin onboarding.</p>
            </div>
          </div>
      </div>
    </section>
  );
}
