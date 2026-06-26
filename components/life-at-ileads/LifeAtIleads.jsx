import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Services({ isLight = false }) {
    return (
        <section className="service-area tmp-section-gapTop tmp-section-gapBottom">
            <div className="container">
                <div className="section-head mb--50">
                    <h3 className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">We Believe Work Should Be More Than Just a Job</h3>
                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Journey of Growth, Collaboration, and Inspiration</h2>
                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">At iLeads, we pride ourselves on fostering a work environment that transcends the ordinary. We believe in cultivating a culture where innovation thrives and individuality is celebrated. Our ethos revolves around the belief that greatness emerges when diverse perspectives converge, and teamwork flourishes. Here's what sets us apart:</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order tmp-link-animation h-100">
                            <h3 className="service-title text-start px-4">Championing Innovation and Individuality
                            </h3>
                            <p className="service-para text-start px-4">At iLeads, we see every individual as a catalyst for change. Our commitment to innovation isn't just a buzzword; it's a way of life. We encourage our team members to push boundaries, challenge norms, and fearlessly pursue their boldest ideas.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order tmp-link-animation h-100">
                            <h3 className="service-title text-start px-4">Collaboration in Every Corner
                            </h3>
                            <p className="service-para text-start px-4">Collaboration isn't just a means to an end; it's the heartbeat of our organization. Whether it's cross-departmental projects or spontaneous brainstorming sessions, we believe in the power of teamwork to drive success.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order tmp-link-animation h-100">
                            <h3 className="service-title text-start px-4">Empowering Flexibility and Autonomy</h3>
                            <p className="service-para text-start px-4">We understand that one size doesn't fit all. That's why we empower our employees with the flexibility and autonomy they need to thrive. Whether it's choosing their work hours or shaping their career paths, we believe in giving individuals the freedom to chart their own course.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order tmp-link-animation h-100">
                            <h3 className="service-title text-start px-4">Safety, Inside and Out</h3>
                            <p className="service-para text-start px-4">A safe workplace isn't just about physical security; it's about nurturing psychological safety too. At iLeads, we've built a culture of trust and support where every voice is heard, and every individual feels valued.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order tmp-link-animation h-100">
                            <h3 className="service-title text-start px-4">Wellness as a Priority</h3>
                            <p className="service-para text-start px-4">We believe that true success stems from a healthy work-life balance. That's why we prioritize employee wellness at every turn. From wellness programs to mental health resources, we're committed to supporting the holistic well-being of our team.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order tmp-link-animation h-100">
                            <h3 className="service-title text-start px-4">Diversity and Inclusion</h3>
                            <p className="service-para text-start px-4">Our strength lies in our differences. At iLeads, we embrace diversity in all its forms, knowing that it's our greatest asset. We're proud to create an environment where every individual feels seen, heard, and valued.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order tmp-link-animation h-100">
                            <h3 className="service-title text-start px-4">Transparency as Standard</h3>
                            <p className="service-para text-start px-4">Transparency isn't just a value; it's a cornerstone of our leadership philosophy. We believe in open communication, honest feedback, and clear decision-making processes. Because when everyone is on the same page, there's no limit to what we can achieve.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order tmp-link-animation h-100">
                            <h3 className="service-title text-start px-4">Recognizing Values in Action</h3>
                            <p className="service-para text-start px-4">We don't just talk the talk; we walk the walk. Our leaders make it a point to recognize and celebrate employees who embody our core values each day. Whether it's through formal recognition programs or simple words of appreciation, we believe in acknowledging excellence wherever we see it.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
