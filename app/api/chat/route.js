import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request) {
  try {
    const data = await request.json();
    
    const {
      name,
      email,
      message
    } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const query = `
      INSERT INTO chat_messages 
      (name, email, message, created_at)
      VALUES (?, ?, ?, NOW())
    `;

    const [result] = await pool.execute(query, [
      name,
      email,
      message
    ]);

    return NextResponse.json({
      success: true,
      message: 'Chat message submitted successfully',
      id: result.insertId
    }, { status: 201 });

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to submit chat message', details: error.message },
      { status: 500 }
    );
  }
}
