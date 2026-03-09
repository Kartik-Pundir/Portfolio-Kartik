import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create transporter (using Gmail as example)
    // You'll need to set up environment variables for this
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email to you (notification)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: 'Kartikpundir231@gmail.com',
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #4ade80; margin-bottom: 20px;">New Contact Form Submission</h2>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            </div>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px;">
              <p style="margin: 5px 0;"><strong>Message:</strong></p>
              <p style="margin: 10px 0; line-height: 1.6;">${message}</p>
            </div>
          </div>
        </div>
      `,
    }

    // Auto-reply email to sender
    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Kartik Pundir',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #4ade80; margin: 0; font-size: 28px;">Thank You for Reaching Out!</h1>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Hi <strong>${name}</strong>,
            </p>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Thank you for contacting me through my portfolio website. I have successfully received your message and I'm excited to connect with you!
            </p>
            
            <div style="background-color: #f0fdf4; border-left: 4px solid #4ade80; padding: 15px; margin: 25px 0; border-radius: 4px;">
              <p style="color: #166534; margin: 0; font-size: 14px;">
                <strong>Your message has been received and I will get back to you as soon as possible.</strong>
              </p>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              I typically respond within 24 hours. In the meantime, feel free to check out my projects and connect with me on social media.
            </p>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <p style="color: #6b7280; font-size: 14px; margin: 5px 0;"><strong>Your Message:</strong></p>
              <p style="color: #374151; font-size: 14px; line-height: 1.6; margin: 10px 0;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #374151; font-size: 16px; margin-bottom: 10px;">
                Best regards,<br>
                <strong style="color: #4ade80;">Kartik Pundir</strong><br>
                <span style="color: #6b7280; font-size: 14px;">Full Stack Developer</span>
              </p>
              
              <div style="margin-top: 20px;">
                <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">
                  📧 Kartikpundir231@gmail.com<br>
                  🔗 <a href="https://github.com/Kartik-Pundir" style="color: #4ade80; text-decoration: none;">GitHub</a> | 
                  <a href="https://www.linkedin.com/in/kartik-pundir816/" style="color: #4ade80; text-decoration: none;">LinkedIn</a>
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                This is an automated response from Kartik Pundir's Portfolio Website.<br>
                Please do not reply directly to this email.
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailToYou)
    await transporter.sendMail(autoReply)

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
