// EmailJS Configuration
// Get these values from https://dashboard.emailjs.com/

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
  
  // Service IDs for different forms
  services: {
    jobApplication: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
    contact: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
    serviceInquiry: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
    chat: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  },
  
  // Template IDs for different forms
  templates: {
    jobApplication: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_JOB || "YOUR_JOB_TEMPLATE_ID",
    contact: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT || "YOUR_CONTACT_TEMPLATE_ID",
    serviceInquiry: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_SERVICE || "YOUR_SERVICE_TEMPLATE_ID",
    chat: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CHAT || "YOUR_CHAT_TEMPLATE_ID",
  }
};

// Instructions:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service and get the Service ID
// 3. Create email templates for each form and get Template IDs
// 4. Get your Public Key from Account settings
// 5. Add these values to your .env.local file:
//
//    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
//    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
//    NEXT_PUBLIC_EMAILJS_TEMPLATE_JOB=your_job_template_id
//    NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT=your_contact_template_id
//    NEXT_PUBLIC_EMAILJS_TEMPLATE_SERVICE=your_service_template_id
//    NEXT_PUBLIC_EMAILJS_TEMPLATE_CHAT=your_chat_template_id
