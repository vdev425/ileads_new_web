import { slugify } from "@/utlis/slugify";

export const services = [
  
]

export const services2 = [
  {
    id: 1,
    num: "01.",
    title: "Inbound Customer Support",
    description:
      "iLeads provides complete call support and customer care services through a highly trained inbound support team that consists of professional tele-callers, team leaders and managers.",
    animationOrder: "1",
    isLink: true,
    column: 1,
    iconClass: "fa fa-user-headset fa-light",
    iconImg: ""
  },
  {
    id: 2,
    num: "02.",
    title: "Seller Support",
    description:
      "Empower your marketplace vendors with our reliable Seller Support Solutions. We help businesses streamline seller onboarding, resolve queries, and provide ongoing assistance to ensure smooth operations and stronger partnerships.",
    animationOrder: "2",
    isLink: true,
    column: 1,
    iconImg: "assets/images/services/seller-support.svg"
  },
  {
    id: 3,
    num: "03.",
    title: "Outbound Collections",
    description:
      "iLeads specializes in ‘outbound portfolio wise collection’ services which include EMI collections and debt collections with a well-trained team that makes sure the calls are professional in nature, always keeping in mind to improve customer relations as a part of the job.",
    animationOrder: "3",
    isLink: true,
    column: 1,
    iconClass:"fa-light fa fa-phone-arrow-up-right",
    iconImg: ""
  },
  {
    id: 4,
    num: "04.",
    title: "Query Handling",
    description:
      "As a part of our Inbound Services our well-trained team also provides all and any ‘Inquiry Handling’ which forms an integral and essential fragment of customer support.",
    animationOrder: "4",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-hands-holding",
    iconImg: ""
  },
  {
    id: 5,
    num: "05.",
    title: "Accounting & Financial Services",
    description:
      "iLeads provides complete accounting and finance services such as billing, invoicing as well as outsources payroll services at cost effective plans and we assure complete confidentiality to our clients.",
    animationOrder: "5",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-hand-holding-dollar",
    iconImg: ""
  },
  {
    id: 6,
    num: "06.",
    title: "End To End Sales",
    description:
      "Lead generation to post-sale support, we manage the entire sales cycle to help businesses drive revenue and build lasting customer relationships.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconImg: "assets/images/services/end-to-end-sale.svg"
  },
    {
    id: 7,
    num: "07.",
    title: "Pre Sales",
    description:
      "During this phase, iLeads provides comprehensive support to engage, identify, filter & schedule appointments with the most promising potential customers for specific services, supporting the core sales team",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconImg: "assets/images/services/pre-sale.svg"
  },
    {
    id: 8,
    num: "08.",
    title: "Outbound Surveys",
    description:
      "We provide help with surveying your customers and collecting information for the betterment of your business’s product or service.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-memo-circle-check",
    iconImg: ""
  },
    {
    id: 9,
    num: "09.",
    title: "Appointment Generation",
    description:
      "In order to provide complete sales solutions for our customer’s business we also provide appointment generation services.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-calendar-days",
    iconImg: ""
  },
    {
    id: 10,
    num: "06.",
    title: "Outbound Lead Generation",
    description:
      "Generating prospective leads for sales teams, in order to help increase the sales revenue of the establishments and businesses.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconImg: "assets/images/services/outbound-lead-generation.svg"
  },
    {
    id: 11,
    num: "06.",
    title: "Email & Chat",
    description:
      "Our Email & Chat Support Services are designed to provide real-time assistance, resolve queries efficiently, and ensure customer satisfaction across multiple touchpoints.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-envelopes-bulk fa-light",
    iconImg: ""
  },
    {
    id: 12,
    num: "06.",
    title: "GST & CIN Verification",
    description:
      "Help you validate your business to ensure credibility amongst your prospective customers and increase your trust factor with them.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconImg: "assets/images/services/gst-cin-verification.svg"
  },
    {
    id: 13,
    num: "06.",
    title: "Security Surveillance",
    description:
      "We help in video monitoring through remote desktop services to ensure on site safety and security and act as whistleblowers when we notice a breach in security.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-camera-cctv fa-light",
    iconImg: ""
  },
    {
    id: 14,
    num: "06.",
    title: "Video Labelling",
    description:
      "Screening through video footage and labelling or tagging them as per the client’s requirement and recommendation.",
    animationOrder: "6",
    isLink: false,
    iconClass: "fa fa-video fa-light",
    column: 2,
    iconImg: ""
  },
    {
    id: 15,
    num: "06.",
    title: "Data Science Projects",
    description:
      "Data entry, data processing, content writing, data seeding, data harvesting and keyword stuffing for all your business needs.",
    animationOrder: "6",
    isLink: false,
    iconClass: "fa fa-atom-simple fa-light",
    column: 2,
    iconImg: ""
  },
    {
    id: 16,
    num: "06.",
    title: "Optical Character Recognition",
    description:
      "Transform the way your business handles data with our advanced OCR solutions. We help organizations digitize, extract, and process information from printed or handwritten documents with speed and precision.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconImg: "assets/images/services/optical-character-recognition.svg"
  },
    {
    id: 17,
    num: "06.",
    title: "Import /Export Code Verification",
    description:
      "Adding value to the trust factor by verifying the Import Export Codes for businesses that require this service.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-square-code fa-light",
    iconImg: ""
  },
    {
    id: 18,
    num: "06.",
    title: "Customer Verification",
    description:
      "iLeads provides support services with verifying identities and filtering through documents to check if they are reliable or fraudulent in nature through KYC validation, and background checks, if needed.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-user-check fa-light",
    iconImg: ""
  },
    {
    id: 19,
    num: "06.",
    title: "Mortgage Sales",
    description:
      "Call assistance regarding information about mortgage loans as well as all sorts of loan programs available.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconImg: "assets/images/services/Mortgage-Sales.svg"
  },
    {
    id: 20,
    num: "06.",
    title: "Cable & Solar Sales",
    description:
      "Our sales team at iLeads helps consumers with detailed information regarding cable and solar equipment, marketing and promoting them, and also advising them about the advantages and savings of purchasing solar powered products.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-solar-panel fa-light",
    iconImg: ""
  },
    {
    id: 21,
    num: "06.",
    title: "Online Data Entry",
    description:
      "We offer online data compilation services for better ease of access and organized storage in a digital format. This is one of the various services iLeads offers to make your business process straightforward and easy.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-laptop-file fa-light",
    iconImg: "assets/images/services/data-entry.svg"
  },
    {
    id: 22,
    num: "06.",
    title: "Data Mining",
    description:
      "iLeads provides comprehensive ‘extraction of data’ services and helps transform your raw data into actual usable information through social and digital platforms.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconImg: "assets/images/services/data-mining.svg"
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const services3 = [
  
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const services4 = [
  
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const serviceCards = [
  
];

export const services5 = [
  {
    title: "Inbound Customer Support",
    description:
      "iLeads provide complete call support and customer care services through a highly trained inbound support team that consists of professional tele-callers, team leaders and managers.",
  },
  {
    title: "Customer Verification",
    description:
      "iLeads provides support services with verifying identities and filtering through documents to check if they are reliable or fraudulent in nature through KYC validation, and background checks, if needed.",
  },
  {
    title: "Pre Sales",
    description:
      "During this phase, iLeads provides comprehensive support to engage, identify, filter & schedule appointments with the most promising potential customers for specific services, supporting the core sales team",
  },
  {
    title: "Outbound Collections",
    description:
      "iLeads specializes in ‘outbound portfolio wise collection’ services which include EMI collections and debt collections with a well-trained team that makes sure the calls are professional in nature, always keeping in mind to improve customer relations as a part of the job.",
  },
  {
    title: "Accounting & Financial Services",
    description:
      "iLeads provides complete accounting and finance services such as billing, invoicing as well as outsources payroll services at cost effective plans and we assure complete confidentiality to our clients.",
  },
  {
    title: "Query Handling",
    description:
      "As a part of our Inbound Services our well-trained team also provides all and any ‘Inquiry Handling’ which forms an integral and essential fragment of customer support.",
  },
];
export const serviceCards2 = [
  {
    number: "01.",
    title: "End-to-End Solutions",
    description:
      "Offering a wide spectrum of BPO and KPO services, from customer support and data management to research, analytics, and knowledge processing.",
  },
  {
    number: "02.",
    title: "Operational Efficiency",
    description:
      "Streamlined processes designed to enhance productivity, reduce turnaround times, and lower operational costs.",
  },
{
    number: "03.",
    title: "24/7 Support",
    description:
      "Round-the-clock assistance ensuring business continuity and seamless customer experiences.",
  },
];

export const serviceCards3 = [
  {
    iconClass: "fa-regular fa-medal",
    title: "Quality",
    description:
      "We focus on cost efficiency and strive daily to create a Zero Error Environment for all our customers. iLeads strongly believes in never sacrificing quality for the sake of quantity.",
    animationOrder: 4,
  },
  {
    iconClass: "fa-light fa-user-gear",
    title: "Efficiency",
    description:
      "We value Time, and respect time constraints set by each and every one of our numerous clients. iLeads believes in delivering time-efficient and conscious results.",
    animationOrder: 5,
  },
  {
    iconClass: "fa-light fa-brain",
    title: "Open Mindedness",
    description:
      "We ensure continuous improvement by keeping ourselves open to suggestions, receptive to feedbacks and interested in advice from all of our business partners.",
    animationOrder: 4,
  },
  {
    iconClass: "fa-regular fa-scale-balanced",
    title: "Equality",
    description:
      "We equally respect our customers, our management and our associates to create a positive and productive work environment. Equality and Respect are the foundational blocks of our company.",
    animationOrder: 5,
  },
 {
    iconClass: "fa-regular fa-handshake",
    title: "Integrity",
    description:
      "Honesty, Reliability, Trust and Accountability are the essential cornerstones of every organization and we make sure that our entire team follows these principles in every transaction they are a part of.",
    animationOrder: 6,
  },
    {
    iconClass: "fa-regular fa-user-shield",
    title: "Confidentiality",
    description:
      "We have a strong Non-Disclosure Agreement that we get into with all our clients to maintain their privacy and focus on providing all the required value support with all our process expertise across a broad range.",
    animationOrder: 7,
  },
{
    iconClass: "fa-regular fa-users",
    title: "Team Work",
    description:
      "iLeads is an organization where everyone works as individuals, coming together as a single and strong unit to achieve all set objectives without any compromise in quality.",
    animationOrder: 8,
  },
{
    iconClass: "fa-regular fa-hand-holding-heart",
    title: "Responsibility",
    description:
      "We enthusiastically take responsibility for our job performance and delivery, using target setting as a tool for aggressively meeting and achieving all set goals.",
    animationOrder: 9,
  },
{
    iconClass: "fa-regular fa-golf-flag-hole",
    title: "Company Vision",
    description:
      "iLeads will grow to be recognized as an organization that delivers high-quality services within set timelines at an affordable cost to each of our clients.",
    animationOrder: 10,
  },
{
    iconClass: "fa-regular fa-bullseye-arrow",
    title: "Company Mission",
    description:
      "Our mission is to GROW. We allow our clients to focus their attention on their core business while we do the heavyweight lifting and deliver every vital support services necessary for their organizations to grow and expand.",
    animationOrder: 11,
  },
];

export const serviceCards6 = [
  {
    iconClass: "fa-regular fa-code",
    title: "Quality kdfljsdjkf",
    description:
      "We focus on cost efficiency and strive daily to create a Zero Error Environment for all our customers. iLeads strongly believes in never sacrificing quality for the sake of quantity.",
    animationOrder: 4,
  },
  {
    iconClass: "fa-light fa-palette",
    title: "Efficiency dsfjsdfl dsjfls",
    description:
      "We value Time, and respect time constraints set by each and every one of our numerous clients. iLeads believes in delivering time-efficient and conscious results.",
    animationOrder: 5,
  },
  {
    iconClass: "fa-light fa-print",
    title: "Open Mindedness",
    description:
      "We ensure continuous improvement by keeping ourselves open to suggestions, receptive to feedbacks and interested in advice from all of our business partners.",
    animationOrder: 4,
  },
  {
    iconClass: "fa-regular fa-handshake",
    title: "Equality",
    description:
      "We equally respect our customers, our management and our associates to create a positive and productive work environment. Equality and Respect are the foundational blocks of our company.",
    animationOrder: 5,
  },
 {
    iconClass: "fa-regular fa-handshake",
    title: "Integrity",
    description:
      "Honesty, Reliability, Trust and Accountability are the essential cornerstones of every organization and we make sure that our entire team follows these principles in every transaction they are a part of.",
    animationOrder: 6,
  },
    {
    iconClass: "fa-regular fa-handshake",
    title: "Confidentiality",
    description:
      "We have a strong Non-Disclosure Agreement that we get into with all our clients to maintain their privacy and focus on providing all the required value support with all our process expertise across a broad range.",
    animationOrder: 7,
  },
{
    iconClass: "fa-regular fa-handshake",
    title: "Team Work",
    description:
      "iLeads is an organization where everyone works as individuals, coming together as a single and strong unit to achieve all set objectives without any compromise in quality.",
    animationOrder: 8,
  },
{
    iconClass: "fa-regular fa-handshake",
    title: "Responsibility",
    description:
      "We enthusiastically take responsibility for our job performance and delivery, using target setting as a tool for aggressively meeting and achieving all set goals.",
    animationOrder: 9,
  },
{
    iconClass: "fa-regular fa-handshake",
    title: "Company Vision",
    description:
      "iLeads will grow to be recognized as an organization that delivers high-quality services within set timelines at an affordable cost to each of our clients.",
    animationOrder: 10,
  },
{
    iconClass: "fa-regular fa-handshake",
    title: "Company Mission",
    description:
      "Our mission is to GROW. We allow our clients to focus their attention on their core business while we do the heavyweight lifting and deliver every vital support services necessary for their organizations to grow and expand.",
    animationOrder: 11,
  },
];

export const industriesweserve = [
  {
    id: 1,
    num: "01.",
    title: "Global",
    description:
      "Serving Multinational Corporations with tailored solutions to meet their global business requirement.",
    animationOrder: "1",
    isLink: true,
    column: 1,
    iconClass: "fa fa-globe fa-light",
    iconImg: ""
  },
  {
    id: 2,
    num: "02.",
    title: "PSU & Government",
    description:
      "Providing specialized services to the Public Sector Undertakings & Government Agencies to enhance efficiency & service provision.",
    animationOrder: "2",
    isLink: true,
    column: 1,
    iconClass: "fa fa-building-columns fa-light",
    iconImg: ""
  },
  {
    id: 3,
    num: "03.",
    title: "E-Commerce",
    description:
      "Offering comprehensive solutions to support the online retail players & enhance customer experience.",
    animationOrder: "3",
    isLink: true,
    column: 1,
    iconClass:"fa-light fa fa-cart-shopping",
    iconImg: ""
  },
  {
    id: 4,
    num: "04.",
    title: "FMCG",
    description:
      "Catering to the fast-paced consumer goods industry, with innovative solutions, for secure & efficient financial transactions.",
    animationOrder: "4",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-utensils",
    iconImg: ""
  },
  {
    id: 5,
    num: "05.",
    title: "FinTech",
    description:
      "Supporting financial technology companies with innovative solutions for secure & efficient financial transactions.",
    animationOrder: "5",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-microchip",
    iconImg: ""
  },
  {
    id: 6,
    num: "06.",
    title: "Pharma & Agro",
    description:
      "Providing specialized services to the pharmaceutical & agrochemical industries to ensure regulatory compliance & operational efficiency.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-prescription-bottle-medical fa-light",
    iconImg: ""
  },
    {
    id: 7,
    num: "07.",
    title: "Telecom & Communication",
    description:
      "Offering solutions to enhance communication networks & customer experiences in the telecom industry.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-tower-broadcast fa-light",
    iconImg: ""
  },
    {
    id: 8,
    num: "08.",
    title: "Education",
    description:
      "Supporting educational institutions with technology-driven solutions for learning management & student engagement.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-user-graduate",
    iconImg: ""
  },
    {
    id: 9,
    num: "09.",
    title: "Travel, Tourism & Surveys",
    description:
      "Providing comprehensive solutions to enhance travel experiences & gather valuable customer feedback.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-plane-departure",
    iconImg: ""
  },
    {
    id: 10,
    num: "06.",
    title: "Hospitality/ Aviation",
    description:
      "Offering specialized services to the hospitality & aviation industries to improve operational efficiencies & customer satisfaction.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-hospitals fa-light",
    iconImg: "assets/images/services/Hospitality.svg"
  },
    {
    id: 11,
    num: "06.",
    title: "Healthcare",
    description:
      "Providing healthcare institutions with technology-driven solutions for appointments, services, management, and engagement.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-envelopes-bulk fa-light",
    iconImg: ""
  },
    {
    id: 12,
    num: "06.",
    title: "Infotainment",
    description:
      "Providing innovative solutions for interactive & engaging content delivery in the information & entertainment industry.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-tv-retro fa-light",
    iconImg: ""
  },
    {
    id: 13,
    num: "06.",
    title: "BFSI Sector",
    description:
      "Supporting the banking, financial services, and insurance sectors with secure & efficient solutions for financial transactions.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-landmark fa-light",
    iconImg: ""
  },
    {
    id: 14,
    num: "06.",
    title: "Real Estate",
    description:
      "Offering solutions to streamline real estate operations & enhance customer experiences in the property market.",
    animationOrder: "6",
    isLink: false,
    iconClass: "fa fa-video fa-light",
    column: 2,
    iconClass: "fa fa-house-building fa-light"
  },
    {
    id: 15,
    num: "06.",
    title: "IT Tech",
    description:
      "Providing IT solutions & services to enhance operational efficiency & innovation in the technology sector.",
    animationOrder: "6",
    isLink: false,
    iconClass: "fa fa-atom-simple fa-light",
    column: 2,
    iconImg: "assets/images/services/IT-Tech.svg"
  },
    {
    id: 16,
    num: "06.",
    title: "Retail",
    description:
      "Offering comprehensive solutions to enhance retail operations & customer experiences in the retail industry.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-store fa-light",
  },
    {
    id: 17,
    num: "06.",
    title: "Media & Entertainment",
    description:
      "Providing innovative solutions for content creation, delivery & engagement in the media & entertainment firms.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-photo-film-music fa-light",
    iconImg: ""
  },
    {
    id: 18,
    num: "06.",
    title: "Automobile",
    description:
      "Supporting the automobile industry with technology-driven solutions for sales, marketing, and customer service.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-car-bus fa-light",
    iconImg: ""
  },
    {
    id: 19,
    num: "06.",
    title: "NBFC",
    description:
      "Offering banking services to the non-banking financial institutions to ensure regulatory compliance & operational efficiency.",
    animationOrder: "6",
    isLink: false,
    column: 2,
    iconClass: "fa fa-building-columns fa-light"
  },
  
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const cybersecuritysolutions = [
  {
    id: 1,
    num: "01.",
    title: "Compliance Automation",
    description:
      "Simplify regulatory compliance with GRCX.io, our platform for managing frameworks like ISO 27001, PCI DSS, GDPR, HIPAA, and SOC 2.",
    animationOrder: "1",
    isLink: true,
    column: 1,
    iconClass: "fa fa-user-headset fa-light",
    iconImg: "assets/images/services/Compliance-Automation.svg"
  },
  {
    id: 2,
    num: "02.",
    title: "Risk Management",
    description:
      "Identify, assess, and mitigate risks with advanced tools and tailored strategies. Enhance decision-making with real-time insights.",
    animationOrder: "2",
    isLink: true,
    column: 1,
    iconImg: "assets/images/services/Risk-Management.svg"
  },
  {
    id: 3,
    num: "03.",
    title: "Policy Management",
    description:
      "Develop, implement, and maintain policies that align with regulatory requirements and organizational goals.",
    animationOrder: "3",
    isLink: true,
    column: 1,
    iconClass:"fa-light fa fa-phone-arrow-up-right",
    iconImg: "assets/images/services/Policy-Management.svg"
  },
  {
    id: 4,
    num: "04.",
    title: "Audit Readiness",
    description:
      "Prepare for internal and external audits with streamlined processes and detailed documentation.",
    animationOrder: "4",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-hands-holding",
    iconImg: "assets/images/services/Audit-Readiness.svg"
  },
  {
    id: 5,
    num: "05.",
    title: "Data Protection and Privacy",
    description:
      "Ensure compliance with data privacy laws such as GDPR and CCPA. Protect sensitive information with cutting-edge solutions.",
    animationOrder: "5",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-hand-holding-dollar",
    iconImg: "assets/images/services/Data-Protection-Privacy.svg"
  },
  
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const cybersecuritysolutions1 = [
  {
    id: 1,
    num: "01.",
    title: "Digital Forensics Investigations",
    description:
      "Analyze digital evidence to identify the source of cyberattacks, data breaches, or other incidents. Our forensic experts uncover the 'who,' 'what,' and 'how' of every incident.",
    animationOrder: "1",
    isLink: true,
    column: 1,
    iconClass: "fa fa-user-headset fa-light",
    iconImg: "assets/images/services/Forensics-Investigations.svg"
  },
  {
    id: 2,
    num: "02.",
    title: "Incident Response Forensics",
    description:
      "Support your incident response process with rapid forensic investigations to mitigate risks and prevent recurrence.",
    animationOrder: "2",
    isLink: true,
    column: 1,
    iconImg: "assets/images/services/Incident-Response-Forensics.svg"
  },
  {
    id: 3,
    num: "03.",
    title: "Malware Analysis",
    description:
      "Dissect malicious software to understand its behavior, identify affected systems, and develop mitigation strategies.",
    animationOrder: "3",
    isLink: true,
    column: 1,
    iconClass:"fa-light fa fa-phone-arrow-up-right",
    iconImg: "assets/images/services/Malware-Analysis.svg"
  },
  {
    id: 4,
    num: "04.",
    title: "Data Recovery",
    description:
      "Recover lost or corrupted data from compromised systems, ensuring minimal disruption to business operations.",
    animationOrder: "4",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-hands-holding",
    iconImg: "assets/images/services/Data-Recovery.svg"
  },
  {
    id: 5,
    num: "05.",
    title: "eDiscovery Services",
    description:
      "Support legal and compliance investigations by collecting, preserving, and analyzing electronic evidence in a forensically sound manner.",
    animationOrder: "5",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-hand-holding-dollar",
    iconImg: "assets/images/services/eDiscovery-Services.svg"
  },
    {
    id: 5,
    num: "05.",
    title: "Insider Threat Investigation",
    description:
      "Uncover and address potential threats originating from within your organization, including unauthorized data access or misuse.",
    animationOrder: "5",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-hand-holding-dollar",
    iconImg: "assets/images/services/Threat-Investigation.svg"
  },
    {
    id: 5,
    num: "05.",
    title: "Cybercrime Investigation Support",
    description:
      "Assist law enforcement or internal investigations with expert analysis of cybercrime incidents, including fraud, intellectual property theft, and data breaches.",
    animationOrder: "5",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-hand-holding-dollar",
    iconImg: "assets/images/services/Cybercrime-Investigation.svg"
  },
  
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});
export const cybersecuritysolutions2 = [
  {
    id: 1,
    num: "01.",
    title: "24/7 Security Operations Center (SOC)",
    description:
      "Monitor, detect, and respond to cyber threats in real-time with our state-of-the-art SOC services.",
    animationOrder: "1",
    isLink: true,
    column: 1,
    iconClass: "fa fa-user-headset fa-light",
    iconImg: "assets/images/services/24-7-Security-Operations.svg"
  },
  {
    id: 2,
    num: "02.",
    title: "Managed Threat Hunting",
    description:
      "Proactively identify and neutralize potential threats before they escalate.",
    animationOrder: "2",
    isLink: true,
    column: 1,
    iconImg: "assets/images/services/Managed-Threat-Hunting.svg"
  },
  {
    id: 3,
    num: "03.",
    title: "Managed Compliance Services",
    description:
      "Leave your compliance requirements to us. From tracking to reporting, we ensure seamless adherence to regulatory standards.",
    animationOrder: "3",
    isLink: true,
    column: 1,
    iconClass:"fa-light fa fa-phone-arrow-up-right",
    iconImg: "assets/images/services/Managed-Compliance-Services.svg"
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const cybersecuritysolutions3 = [
  {
    id: 1,
    num: "01.",
    title: "Security Awareness Training",
    description:
      "Empower your team with the knowledge to identify and prevent cyber threats. Conduct phishing simulations and workshops to build a security-first culture.",
    animationOrder: "1",
    isLink: true,
    column: 1,
    iconClass: "fa fa-user-headset fa-light",
    iconImg: "assets/images/services/Security-Awareness-Training.svg"
  },
  {
    id: 2,
    num: "02.",
    title: "Cloud Security Solutions",
    description:
      "Secure your cloud infrastructure across AWS, Azure, and Google Cloud with robust configurations and threat monitoring.",
    animationOrder: "2",
    isLink: true,
    column: 1,
    iconImg: "assets/images/services/Cloud-Security-Solutions.svg"
  },
  {
    id: 3,
    num: "03.",
    title: "IoT and Operational Technology (OT) Security",
    description:
      "Protect your smart devices and operational technology from cyber threats with tailored security measures.",
    animationOrder: "3",
    isLink: true,
    column: 1,
    iconClass:"fa-light fa fa-phone-arrow-up-right",
    iconImg: "assets/images/services/IoT-Operational-Technology-Security.svg"
  },
  {
    id: 4,
    num: "04.",
    title: "Business Continuity and Disaster Recovery (BC/DR)",
    description:
      "Ensure uninterrupted business operations during and after a cyber incident with strategic continuity planning and recovery solutions.",
    animationOrder: "4",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-hands-holding",
    iconImg: "assets/images/services/Business-Continuity-Disaster-Recovery.svg"
  },
  {
    id: 5,
    num: "05.",
    title: "Advanced Threat Hunting",
    description:
      "Proactively search for threats that have evaded traditional detection mechanisms, ensuring your systems are secure.",
    animationOrder: "5",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-hand-holding-dollar",
    iconImg: "assets/images/services/Advanced-Threat-Hunting.svg"
  },
    {
    id:6,
    num: "05.",
    title: "Red, Blue, and Purple Team Assessments",
    description:
      "Red Team: Simulate advanced adversary attacks to test defenses. Blue Team: Strengthen defense mechanisms and improve SOC operations. Purple Team: Facilitate collaboration between Red and Blue Teams to optimize security responses.",
    animationOrder: "5",
    isLink: false,
    column: 2,
    iconClass:"fa-light fa-hand-holding-dollar",
    iconImg: "assets/images/services/Team-Assessments.svg"
  },

  
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const cybersecuritysolutions4 = [
  {
    id: 1,
    num: "01.",
    title: "DARKX.io",
    description:
      "A cutting-edge dark web monitoring platform that safeguards your business by detecting compromised data, monitoring brand reputation, and identifying emerging threats.",
    animationOrder: "1",
    isLink: true,
    column: 1,
    iconClass: "fa fa-user-headset fa-light",
    iconImg: "assets/images/services/io-product.svg"
  },
  {
    id: 2,
    num: "02.",
    title: "GRCX.io",
    description:
      "An end-to-end governance, risk, and compliance platform designed to automate compliance, track risks, and enhance audit readiness.",
    animationOrder: "2",
    isLink: true,
    column: 1,
    iconImg: "assets/images/services/io-product.svg"
  },
 
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const HiringProcess = [
  {
    id: 1,
    icon: "fa-light fa-pen-ruler",
    title: "We Deliver Process Excellence",
    projects: "We exceed expectations with personalized and innovative solutions for our clients' unique needs.",
    animationOrder: "1",
  },
  {
    id: 2,
    icon: "fa-light fa-bezier-curve",
    title: "We Work 24/7",
    projects: "We operate around the clock to ensure that your business needs are met. Anytime, anywhere.",
    animationOrder: "2",
  },
  {
    id: 3,
    icon: "fa-light fa-lightbulb",
    title: "Affordable Prices",
    projects: "Our competitively priced services maintain quality, accessible to businesses of all sizes and budgets.",
    animationOrder: "3",
  },
  // {
  //   id: 4,
  //   icon: "fa-light fa-envelope",
  //   title: "Marketing",
  //   projects: "331 Prodect",
  //   animationOrder: "4",
  // },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const allServices = [
  ...services,
  ...services2,
  ...services3,
  ...services4,
];
