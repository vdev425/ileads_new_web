// Email configuration
export const EMAIL_CONFIG = {
  from: process.env.SMTP_FROM_EMAIL || 'noreply@yourcompany.com'
};

// Job Application Email Template
export const jobApplicationEmail = (data) => {
  const { name, fatherName, dob, gender, contactNumber, email, address, city, qualification, experience } = data;
  
  return {
    subject: `Join Our Team at iLeads!`,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>For Associates</title>
    </head>
    <body style="background:#f4f4f4; padding-top:30px;">
        <div id="email" style="width:800px;margin: auto;">
            <table role="presentation" border="0" align="right" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
                <tr>
                    <td>
                    <table role="presentation" border="0" align="right" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial; font-size: 16px;">
                        <tr>
                            <td style="background:#333;padding:15px;vertical-align: middle;text-align: center;">
                                <div class="">
                                    <img src="https://www.ileads.co.in/assets/images/logo/logo.png" alt="iLeads Logo" width="" height="70">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:35px;vertical-align:center" v-align="middle">
                                <table role="presentation" border="0" align="right" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial; font-size: 16px;">
                                    
                                    <tr>
                                        <td style="padding-top:5px;padding-bottom:5px;">
                                            <p style="margin-bottom:30px;">Hey There,</p>
    
                                            <p>Welcome to iLeads Auxiliary Services Private Limited! We’re thrilled to connect with you!</p>
                                            <p>Ready to embark on a rewarding journey with us? Join our team of dedicated telecallers and be a part of our mission to deliver excellence in business support services.</p>
                                            <p>Thanks for filling out the form on our website. We &apos; ll be in touch shortly to kickstart your career with iLeads.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding-top:5px;padding-bottom:5px;">
                                            <p>Warm regards, <br>
                                            iLeads Auxiliary Services Private Limited</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" bgcolor="#f9f9f9" style="padding:35px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#898989;font-size: 12px;text-align: center;">
                                <div class="    ">
                                    <p>iLeads is one of the fastest-growing and leading BPO/KPO/ITES industry-based companies in the nation. Started in 2010, in the Dehradun region, our company has grown successfully over the years to become one of the most experienced teams in Data, Business and Call Processing works. We are proud to be recognized by both Start Up India as well as Start Up Uttarakhand and the winner of the 2020 Best Start Up by the Chamber of Commerce & Industry of India.</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                    </td>
                </tr>
            </table>
        </div>
    </body>
    </html>`
  };
};

// Contact Form Email Template
export const contactEmail = (data) => {
  const { name, organization, email, phone, message } = data;
  
  return {
    subject: `Welcome to iLeads: Your BPM Partner!`,
    html: `
      <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>For Clients</title>
    </head>
    <body style="background:#f4f4f4; padding-top:30px;">
        <div id="email" style="width:800px;margin: auto;">
            <table role="presentation" border="0" align="right" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
                <tr>
                    <td>
                    <table role="presentation" border="0" align="right" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial; font-size: 16px;">
                        <tr>
                            <td style="background:#333;padding:15px;vertical-align: middle;text-align: center;">
                                <div class="">
                                    <img src="https://www.ileads.co.in/assets/images/logo/logo.png" alt="iLeads Logo" width="" height="70">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:35px;vertical-align:center" v-align="middle">
                                <table role="presentation" border="0" align="right" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial; font-size: 16px;">
                                    
                                    <tr>
                                        <td style="padding-top:5px;padding-bottom:5px;">
                                            <p style="margin-bottom:30px;">Dear Client,</p>
    
                                            <p>Welcome to iLeads Auxiliary Services Private Limited! We’re excited to connect with you!</p>
                                            <p>Thank you for choosing iLeads as your partner in business process management. Let us handle the auxiliary tasks while you focus on your core strategies.</p>
                                            <p>We &apos; ve received your form submission and will be in touch shortly to discuss how we can elevate your business together. Count on us for exceptional, cost-effective services delivered promptly.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding-top:5px;padding-bottom:5px;">
                                            <p>Warm regards, <br>
                                            iLeads Auxiliary Services Private Limited</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" bgcolor="#f9f9f9" style="padding:35px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#898989;font-size: 12px;text-align: center;">
                                <div class="  ">
                                    <p>iLeads is one of the fastest-growing and leading BPO/KPO/ITES industry-based companies in the nation. Started in 2010, in the Dehradun region, our company has grown successfully over the years to become one of the most experienced teams in Data, Business and Call Processing works. We are proud to be recognized by both Start Up India as well as Start Up Uttarakhand and the winner of the 2020 Best Start Up by the Chamber of Commerce & Industry of India.</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                    </td>
                </tr>
            </table>
        </div>
    </body>
    </html>`
  };
};

// Service Inquiry Email Template
export const serviceInquiryEmail = (data) => {
  const { name, organization, email, query } = data;
  
  return {
    subject: `Welcome to iLeads: Your BPM Partner!`,
    html: `
      <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>For Clients</title>
    </head>
    <body style="background:#f4f4f4; padding-top:30px;">
        <div id="email" style="width:800px;margin: auto;">
            <table role="presentation" border="0" align="right" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
                <tr>
                    <td>
                    <table role="presentation" border="0" align="right" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial; font-size: 16px;">
                        <tr>
                            <td style="background:#333;padding:15px;vertical-align: middle;text-align: center;">
                                <div class="">
                                    <img src="https://www.ileads.co.in/assets/images/logo/logo.png" alt="iLeads Logo" width="" height="70">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:35px;vertical-align:center" v-align="middle">
                                <table role="presentation" border="0" align="right" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial; font-size: 16px;">
                                    
                                    <tr>
                                        <td style="padding-top:5px;padding-bottom:5px;">
                                            <p style="margin-bottom:30px;">Dear Client,</p>
    
                                            <p>Welcome to iLeads Auxiliary Services Private Limited! We’re excited to connect with you!</p>
                                            <p>Thank you for choosing iLeads as your partner in business process management. Let us handle the auxiliary tasks while you focus on your core strategies.</p>
                                            <p>We &apos; ve received your form submission and will be in touch shortly to discuss how we can elevate your business together. Count on us for exceptional, cost-effective services delivered promptly.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding-top:5px;padding-bottom:5px;">
                                            <p>Warm regards, <br>
                                            iLeads Auxiliary Services Private Limited</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" bgcolor="#f9f9f9" style="padding:35px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#898989;font-size: 12px;text-align: center;">
                                <div class="  ">
                                    <p>iLeads is one of the fastest-growing and leading BPO/KPO/ITES industry-based companies in the nation. Started in 2010, in the Dehradun region, our company has grown successfully over the years to become one of the most experienced teams in Data, Business and Call Processing works. We are proud to be recognized by both Start Up India as well as Start Up Uttarakhand and the winner of the 2020 Best Start Up by the Chamber of Commerce & Industry of India.</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                    </td>
                </tr>
            </table>
        </div>
    </body>
    </html>`
  };
};