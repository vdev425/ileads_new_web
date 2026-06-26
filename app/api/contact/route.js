import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import transporter from '@/lib/mailer';
import { contactEmail } from '@/lib/email-templates';

export async function POST(request) {
  try {
    const data = await request.json();
    
    const {
      name,
      organization,
      email,
      phone,
      message
    } = data;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, email, phone, and message are required' },
        { status: 400 }
      );
    }

    const query = `
      INSERT INTO contact_us 
      (name, organization, email, phone, message, created_at)
      VALUES (?, ?, ?, ?, ?, NOW())
    `;

    const [result] = await pool.execute(query, [
      name,
      organization || null,
      email,
      phone,
      message
    ]);

    // Send email using Nodemailer
    if (process.env.SMTP_HOST) {
      try {
        const emailTemplate = contactEmail(data);
        
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
      message: 'Contact message submitted successfully',
      id: result.insertId
    }, { status: 201 });

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact message', details: error.message },
      { status: 500 }
    );
  }
}
