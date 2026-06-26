import { slugify } from "@/utlis/slugify";
import Link from "next/link";

export const blogData = [
  
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData2 = [
 
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData3 = [
{
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/home-01/case-s_ecommerce.jpg",
    altText: "An E-Commerce Company",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "An E-Commerce Company",
    tags: [
      "All Project",

      "Graphics",
      "Web Design",
      "CV",
      "Starts",

      "CV Card",
      "Start shape",
    ],
    para: "Case Study: Company XXX (An E-Commerce Company) - Driving Growth and Efficiency in Customer Service Operations",
    categories: ["Business Solution", "UI/UX Design Innovation"],
    description:
      "This Company, is one of India's largest e-commerce platforms, partnered with iLeads to enhance its customer service operations. With a vision to create a reliable and seamless commerce ecosystem, the Company sought to improve customer experiences and streamline its processes.",
      readMoreLink: "/e-commerce-case-studies",
    ariaLabel: "Read more about An E-Commerce Company",
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/home-01/case-s_financial.jpg",
    altText: "A Financial Institution Company",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "A Financial Institution Company",
    tags: [
      "All Project",
      "Resume",
      "Graphics",
      "Web Design",
      "CV",
      "Starts",
      "Creative Portfolio",
      "Portfolio",
      "CV Card",
      "Start shape",
    ],
    para: "Case Study: Company XXX (A Financial Institution Company) - Revolutionizing Customer Support with iLeads Auxiliary Services Pvt. Ltd.",
    categories: ["Business Solution", "Web Development Wizardry"],
    description:
      "iLeads has emerged as a dominant player, catering to 80% of the volume in the Inbound Call (IBC) segment. This achievement underscores the company's ability to efficiently manage and handle a large volume of incoming calls, showcasing its expertise in customer service.",
      readMoreLink: "/a-financial-institution-company",
      ariaLabel: "Read more about A Financial Institution Company",
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/home-01/case-s_retailer.jpg",
    altText: "An Online Retailer Company",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "An Online Retailer Company",
    tags: [
      "All Project",
      "Resume",
      "Graphics",
      "Web Design",
      "CV",
      "Starts",
      "Creative Portfolio",
      "Portfolio",
      "CV Card",
      "Start shape",
    ],
    categories: ["Content Creation and Strategy", "UI/UX Design Innovation"],
    para: "Case Study: Company XXX (An Online Retailer Company) - Enhancing E-Commerce Services and Market Share",
    description:
      "This Company is a leading e-commerce company that provides business-to-business (B2B) and customer-to-customer (C2C) sales services through a web portal. With an aggregate of 32.5 Crores, 55.2 Crores, and 72.3 Crores visits in Fiscal Year 2017, 2018, and 2019 respectively, the Company has established itself as a major player in the Indian e-commerce market.",
      readMoreLink: "/online-retailer-case-studies",
      ariaLabel: "Read more about An Online Retailer Company",
  },
  {
    id: 4,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/home-01/case-s_insurance.jpg",
    altText: "An Insurance Company",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "An Insurance Company",
    tags: [
      "All Project",
      "Resume",
      "Graphics",
      "Web Design",
      "CV",
      "Starts",
      "Creative Portfolio",
      "Portfolio",
      "CV Card",
      "Start shape",
    ],
    categories: ["Content Creation and Strategy", "UI/UX Design Innovation"],
    para: "Case Study: Company XXX (An Insurance Company)",
    description:
      "This case study highlights iLeads' successful partnership with a life insurance company, showcasing their innovative solutions and strategic approach that led to significant improvements in sales, retention, and operational efficiency.",
      readMoreLink: "/insurance-case-studies",
      ariaLabel: "Read more about An Insurance Company",
  },
  {
    id: 5,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/home-01/case-s_BFSI-NBFC.jpg",
    altText: "A BFSI/NBFC Company",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "A BFSI/NBFC Company",
    tags: [
      "All Project",
      "Resume",
      "Graphics",
      "Web Design",
      "CV",
      "Starts",
      "Creative Portfolio",
      "Portfolio",
      "CV Card",
      "Start shape",
    ],
    categories: ["Content Creation and Strategy", "UI/UX Design Innovation"],
    para: "Case Study: Company XXX (A BFSI/ NBFC Company) - Enhancing Collection Efficiency and Client Satisfaction",
    description:
      "A BFSI/NBFC Company, a prominent player in the BFSI/NBFC sector, is a subsidiary of Company XXX Holdings & Investment Limited. With a diverse product portfolio exceeding 100 products across 40 verticals, this Company prides itself on its mantra of 'Do More, Earn More'. The Company emphasizes rewarding and recognizing its employees and partners, fostering a culture of excellence.",
      readMoreLink: "/bfsi-nbfc-case-studies",
      ariaLabel: "Read more about A BFSI/NBFC Company",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };

});

export const blogData4 = [
  
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData5 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/home-01/news-7.jpg",
    altText: "The startup provided employement to more than 3500 youth",
    date: "2024",
    title: "The startup provided employement to more than 3500 youth.",
    width: 410,
    height: 291,    
    link:"/assets/images/news/3500-youth-employement.pdf",
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/home-01/news-6.jpg",
    altText: "Game Changers of Uttarakhand Awards 2024",
    date: "2024",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Game Changers of Uttarakhand Awards 2024",
    width: 410,
    height: 291,

    link:"/assets/images/news/19-May-Dehradun-2.pdf",
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/home-01/news-1.jpg",
    altText: "Provided employment to more than 3000 youth through startup.",
    date: "2024",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Provided employment to more than 3000 youth through startup.",
    width: 411,
    height: 291,

    link:"/assets/images/news/Ankur-Sinha-Pride-of-UK-2024.pdf",
  },
  {
    id: 4,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/home-01/news-2.jpg",
    altText: "Dedication and Discipline are the keys to success.",
    date: "2024",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Dedication and Discipline are the keys to success.",
    width: 410,
    height: 294,
    link:"/assets/images/news/Dedication-is-the-key-to-success.pdf",
  },
  {
  id: 5,
  animationOrder: "animation-order-3",
  imageSrc: "/assets/images/home-01/news-5.jpg",
  altText: "Startup Bharat: This Dehradun-based video conferencing platform is taking on Zoom, Google Meet",
  date: "2020",
  author: "Mesbah",
  comments: "Comments (05)",
  title: "Startup Bharat: This Dehradun-based video conferencing platform is taking on Zoom, Google Meet",
  width: 410,
  height: 294,
  link:"https://yourstory.com/2020/05/startup-bharat-dehradun-video-conferencing-zoom-google-meet-coronavirus",
},
  {
  id: 6,
  animationOrder: "animation-order-3",
  imageSrc: "/assets/images/home-01/news-4.jpg",
  altText: "Winner of India 500 Startup Awards 2019",
  date: "2019",
  author: "Mesbah",
  comments: "Comments (05)",
  title: "Winner of India 500 Startup Awards 2019",
  width: 410,
  height: 294,
  link:"https://india5000.com/winners/2019/india-500-startup-awards-2019/ileads-auxiliary-services-pvt-ltd",
},
{
  id: 7,
  animationOrder: "animation-order-3",
  imageSrc: "/assets/images/home-01/news-3.jpg",
  altText: "In the journey of 12 years, iLeads became a source of employmentfor thousands of youth.",
  date: "2019",
  author: "Mesbah",
  comments: "Comments (05)",
  title: "In the journey of 12 years, iLeads became a source of employmentfor thousands of youth.",
  width: 410,
  height: 294,
  link:"assets/images/news/Journey-of-12-yrs.pdf",
},
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData8 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/newsroom/Symbol-of-Excellence.jpg",
    altText: "Blog Thumbnail",
    date: "2024",
    title: "Symbol of Excellence | iLeads Auxiliary Services Pvt. Ltd.",
    width: 410,
    height: 291,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/newsroom/ILeads-stand-for.jpg",
    altText: "Blog Thumbnail",
    date: "2024",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "What does iLeads stand for?",
    width: 410,
    height: 291,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/newsroom/welcome-ileads.jpg",
    altText: "Blog Thumbnail",
    date: "2024",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Welcome to iLeads",
    width: 411,
    height: 291,
  },
  {
    id: 4,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/newsroom/why-ileads.jpg",
    altText: "Blog Thumbnail",
    date: "2024",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Why iLeads?",
    width: 410,
    height: 294,
  },
  {
  id: 5,
  animationOrder: "animation-order-3",
  imageSrc: "/assets/images/newsroom/virtual-office-tour.jpg",
  altText: "Blog Thumbnail",
  date: "2020",
  author: "Mesbah",
  comments: "Comments (05)",
  title: "The Virtual Tour of iLeads",
  width: 410,
  height: 294,
},
  {
  id: 6,
  animationOrder: "animation-order-3",
  imageSrc: "/assets/images/newsroom/become-a-part-ileads.jpg",
  altText: "Blog Thumbnail",
  date: "2019",
  author: "Mesbah",
  comments: "Comments (05)",
  title: "Become a Part of iLeads Auxiliary Service Pvt Ltd",
  width: 410,
  height: 294,
},
{
  id: 7,
  animationOrder: "animation-order-3",
  imageSrc: "/assets/images/newsroom/iLeads-services.jpg",
  altText: "Blog Thumbnail",
  date: "2019",
  author: "Mesbah",
  comments: "Comments (05)",
  title: "iLeads Services",
  width: 410,
  height: 294,
},
{
  id: 8,
  animationOrder: "animation-order-3",
  imageSrc: "/assets/images/newsroom/about-us.jpg",
  altText: "Blog Thumbnail",
  date: "2019",
  author: "Mesbah",
  comments: "Comments (05)",
  title: "About iLeads Auxiliary Services Private Limited",
  width: 410,
  height: 294,
},
{
  id: 9,
  animationOrder: "animation-order-3",
  imageSrc: "/assets/images/newsroom/play-img.png",
  altText: "Blog Thumbnail",
  date: "2019",
  author: "Mesbah",
  comments: "Comments (05)",
  title: "iLeads Auxiliary Services PVT LTD",
  width: 410,
  height: 294,
},
{
  id: 10,
  animationOrder: "animation-order-3",
  imageSrc: "/assets/images/newsroom/play-img.png",
  altText: "Blog Thumbnail",
  date: "2019",
  author: "Mesbah",
  comments: "Comments (05)",
  title: "iLeads Auxiliary Services PVT LTD",
  width: 410,
  height: 294,
},
{
  id: 11,
  animationOrder: "animation-order-3",
  imageSrc: "/assets/images/newsroom/Life-at-ileads.jpg",
  altText: "Blog Thumbnail",
  date: "2019",
  author: "Mesbah",
  comments: "Comments (05)",
  title: "iLeads Auxiliary Services PVT LTD",
  width: 410,
  height: 294,
},
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData6 = [
  
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});
export const blogData7 = [
  
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const posts = [
  {
    id: 1,
    imageSrc: "/assets/images/blog/single-post-card-img-1.png",
    category: "Category",
    title: "Sustainable Solutions: Designing for Tomorrow",
  },
  {
    id: 2,
    imageSrc: "/assets/images/blog/single-post-card-img-2.png",
    category: "Category",
    title: "Technological Innovations: Shaping the Future",
  },
  {
    id: 3,
    imageSrc: "/assets/images/blog/single-post-card-img-3.png",
    category: "Category",
    title: "Adventure Awaits Exploring the Great Outdoors",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});
export const allBlogs = [
  ...blogData,
  ...blogData2,
  ...blogData3,
  ...blogData4,
  ...blogData5,
  ...blogData6,
  ...blogData7,
  ...posts,
];
export const categories = [
  { title: "Business Solution", count: "01" },
  { title: "Web Development Wizardry", count: "08" },
  { title: "Content Creation and Strategy", count: "05" },
  { title: "UI/UX Design Innovation", count: "05" },
];
export const tags = [
  "All Project",
  "Resume",
  "Graphics",
  "Web Design",
  "CV",
  "Starts",
  "Creative Portfolio",
  "Portfolio",
  "CV Card",
  "Start shape",
];
