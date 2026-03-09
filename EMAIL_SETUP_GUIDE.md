# Email Setup Guide

This guide will help you set up the automatic email response feature for your portfolio contact form.

## Prerequisites
- A Gmail account (or any other email service)
- Access to your email account settings

## Setup Steps

### 1. Create a Gmail App Password

Since Gmail requires 2-factor authentication for app access, you need to create an App Password:

1. Go to your Google Account: https://myaccount.google.com/
2. Select "Security" from the left menu
3. Under "How you sign in to Google," select "2-Step Verification" (enable it if not already enabled)
4. At the bottom of the page, select "App passwords"
5. Select "Mail" and "Other (Custom name)" - name it "Portfolio Website"
6. Click "Generate"
7. Copy the 16-character password (you won't be able to see it again)

### 2. Create Environment Variables File

1. In your project root, create a file named `.env.local`
2. Add the following content:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
```

Replace:
- `your-email@gmail.com` with your actual Gmail address
- `your-16-character-app-password` with the App Password you generated

### 3. Add .env.local to .gitignore

Make sure `.env.local` is in your `.gitignore` file to keep your credentials secure:

```
.env.local
```

### 4. Restart Your Development Server

After creating the `.env.local` file, restart your development server:

```bash
npm run dev
```

## Testing

1. Go to your portfolio website
2. Fill out the contact form
3. Submit the form
4. You should receive:
   - A notification email at Kartikpundir231@gmail.com
   - The sender should receive an automatic confirmation email

## Email Features

### Notification Email (to you)
- Subject: "New Portfolio Contact from [Name]"
- Contains: Name, Email, and Message from the sender
- Professional formatting with your brand colors

### Auto-Reply Email (to sender)
- Subject: "Thank you for contacting Kartik Pundir"
- Professional thank you message
- Confirms message receipt
- Mentions 24-hour response time
- Includes your contact information and social links
- Shows their original message for reference
- Works perfectly in both light and dark email clients

## Troubleshooting

### "Failed to send email" error
- Check that your `.env.local` file exists and has the correct credentials
- Verify your App Password is correct (no spaces)
- Make sure 2-Step Verification is enabled on your Google account
- Restart your development server after creating `.env.local`

### Emails not arriving
- Check spam/junk folders
- Verify the email addresses are correct
- Check your Gmail account's "Sent" folder to confirm emails were sent

### Using a different email service
If you want to use a service other than Gmail, update the transporter configuration in `app/api/send-email/route.ts`:

```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.your-email-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})
```

## Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variables in your hosting platform's dashboard
2. Set `EMAIL_USER` and `EMAIL_PASSWORD` as environment variables
3. Redeploy your application

### Vercel
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add `EMAIL_USER` and `EMAIL_PASSWORD`
4. Redeploy

### Netlify
1. Go to Site settings > Build & deploy > Environment
2. Add `EMAIL_USER` and `EMAIL_PASSWORD`
3. Redeploy

## Security Notes

- Never commit `.env.local` to version control
- Use App Passwords, not your actual Gmail password
- Keep your credentials secure
- Regularly rotate your App Passwords

## Support

If you encounter any issues, check:
- Node.js version (should be 18+)
- Environment variables are correctly set
- Development server was restarted after adding `.env.local`
