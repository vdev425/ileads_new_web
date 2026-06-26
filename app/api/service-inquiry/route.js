import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import transporter from '@/lib/mailer';
import { serviceInquiryEmail } from '@/lib/email-templates';

export async function POST(request) {
  try {
    const data = await request.json();
    
    const {
      name,
      organization,
      email,
      query
    } = data;

    if (!name || !organization || !email || !query) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const dbQuery = `
      INSERT INTO service_inquiry 
      (name, organization, email, query, created_at)
      VALUES (?, ?, ?, ?, NOW())
    `;

    const [result] = await pool.execute(dbQuery, [
      name,
      organization,
      email,
      query
    ]);

    // Send email using Nodemailer
    if (process.env.SMTP_HOST) {
      try {
        const emailTemplate = serviceInquiryEmail(data);
        
        await transporter.sendMail({
          from: process.env.SMTP_FROM_EMAIL,
          to: email,
          subject: emailTemplate.subject,
          html: emailTemplate.html,
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Service inquiry submitted successfully',
      id: result.insertId
    }, { status: 201 });

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to submit service inquiry', details: error.message },
      { status: 500 }
    );
  }
}
