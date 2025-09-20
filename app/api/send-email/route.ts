import { NextRequest, NextResponse } from 'next/server';
import { resend } from '@/lib/resend';
import { visitFormSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the form data
    const validatedData = visitFormSchema.parse(body);

    const { firstName, lastName, phone, email, profession, company } = validatedData;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Visit Request <noreply@coworking.shyamverma.com>',
      to: ['shyam+coworking@readybytes.in'],
      subject: 'New Visit Request - Coworking Space',
      html: `
        <h2>New Visit Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
      `
    });

    if (error) {
      console.error('Email send error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Invalid request data' },
      { status: 400 }
    );
  }
}