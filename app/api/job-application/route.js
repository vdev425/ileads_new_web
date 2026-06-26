import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import transporter from '@/lib/mailer';
import { jobApplicationEmail } from '@/lib/email-templates';

export async function POST(request) {
  try {
    const data = await request.json();
    
    const {
      name,
      fatherName,
      dob,
      gender,
      contactNumber,
      email,
      address,
      city,
      qualification,
      experience
    } = data;

    if (!name || !email || !contactNumber) {
      return NextResponse.json(
        { error: 'Name, email, and contact number are required' },
        { status: 400 }
      );
    }

    // Insert into database
    const query = `
      INSERT INTO job_application 
      (name, father_name, dob, gender, contact_number, email, address, city, qualification, experience, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `;

    const [result] = await pool.execute(query, [
      name,
      fatherName || null,
      dob || null,
      gender || null,
      contactNumber,
      email,
      address || null,
      city || null,
      qualification || null,
      experience || null
    ]);

    // Send email using Nodemailer
    if (process.env.SMTP_HOST) {
      try {
        const emailTemplate = jobApplicationEmail(data);
        
        await transporter.sendMail({
          from: process.env.SMTP_FROM_EMAIL,
          to: email,
          subject: emailTemplate.subject,
          html: emailTemplate.html,
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      id: result.insertId
    }, { status: 201 });

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application', details: error.message },
      { status: 500 }
    );
  }
}
