// Simple script to test email configuration
// Run with: node test-email.js

require('dotenv').config({ path: '.env.local' })
const nodemailer = require('nodemailer')

async function testEmail() {
  console.log('🔍 Testing email configuration...\n')

  // Check environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error('❌ ERROR: Email credentials not found in .env.local')
    console.log('\nPlease make sure .env.local exists with:')
    console.log('EMAIL_USER=Kartikpundir231@gmail.com')
    console.log('EMAIL_PASSWORD=your-app-password-here')
    process.exit(1)
  }

  if (process.env.EMAIL_PASSWORD === 'your-app-password-here') {
    console.error('❌ ERROR: Please replace "your-app-password-here" with your actual Gmail App Password')
    console.log('\nFollow the instructions in GET_APP_PASSWORD.md to get your App Password')
    process.exit(1)
  }

  console.log('✅ Environment variables found')
  console.log(`📧 Email: ${process.env.EMAIL_USER}`)
  console.log(`🔑 Password: ${'*'.repeat(process.env.EMAIL_PASSWORD.length)} (hidden)\n`)

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    console.log('🔄 Verifying connection...')
    await transporter.verify()
    console.log('✅ Connection successful!\n')

    // Send test email
    console.log('📤 Sending test email...')
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Test Email from Portfolio Website',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #4ade80;">✅ Email Configuration Successful!</h2>
          <p>Your portfolio contact form is now ready to send emails.</p>
          <p>This is a test email sent at: ${new Date().toLocaleString()}</p>
        </div>
      `,
    })

    console.log('✅ Test email sent successfully!')
    console.log(`📬 Message ID: ${info.messageId}`)
    console.log(`\n🎉 SUCCESS! Check your inbox at ${process.env.EMAIL_USER}`)
    console.log('\nYour contact form is now fully configured and ready to use!')
  } catch (error) {
    console.error('\n❌ ERROR:', error.message)
    console.log('\nCommon issues:')
    console.log('1. App Password is incorrect (check for typos or spaces)')
    console.log('2. 2-Step Verification is not enabled on your Google account')
    console.log('3. You need to create a new App Password')
    console.log('\nSee GET_APP_PASSWORD.md for detailed instructions')
    process.exit(1)
  }
}

testEmail()
