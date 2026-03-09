# Quick Start - Email Setup

## Step 1: Create .env.local file

Create a file named `.env.local` in your project root with:

```env
EMAIL_USER=Kartikpundir231@gmail.com
EMAIL_PASSWORD=your-app-password-here
```

## Step 2: Get Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Enable 2-Step Verification if not already enabled
3. Create an App Password for "Mail"
4. Copy the 16-character password
5. Paste it in `.env.local` as `EMAIL_PASSWORD`

## Step 3: Restart Server

```bash
npm run dev
```

## Done!

Your contact form will now:
- Send you notifications at Kartikpundir231@gmail.com
- Send automatic confirmation emails to visitors
- Show a loading spinner while sending
- Display success/error messages

Test it by filling out your contact form!
