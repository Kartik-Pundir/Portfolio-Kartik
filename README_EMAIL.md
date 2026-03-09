# Email Service Configuration

## ✅ What's Already Done

Your portfolio contact form is fully built and ready! It includes:
- Professional contact form with validation
- Loading states and error handling
- Automatic email responses to visitors
- Email notifications to you
- Beautiful email templates
- Fallback to mailto if not configured

## ⏳ What You Need to Do

Add your Gmail App Password to make it work:

### Quick Steps:

1. **Get App Password** (2 minutes)
   - Go to: https://myaccount.google.com/apppasswords
   - Create password for "Mail" → "Portfolio Website"
   - Copy the 16-character password

2. **Add to .env.local** (1 minute)
   ```env
   EMAIL_USER=Kartikpundir231@gmail.com
   EMAIL_PASSWORD=your-16-char-password
   ```

3. **Test It** (1 minute)
   ```bash
   node test-email.js
   ```

4. **Restart Server** (1 minute)
   ```bash
   npm run dev
   ```

## 📚 Documentation Files

- **SETUP_EMAIL_NOW.md** - Quick setup guide (START HERE!)
- **GET_APP_PASSWORD.md** - Detailed App Password instructions
- **EMAIL_SETUP_GUIDE.md** - Complete documentation
- **test-email.js** - Test script to verify setup

## 🧪 Testing

After setup, test your contact form:
1. Go to http://localhost:3000
2. Fill out the contact form
3. You should receive:
   - Notification email (to you)
   - Confirmation email (to the sender)

## 🔧 Troubleshooting

Run the test script to diagnose issues:
```bash
node test-email.js
```

It will tell you exactly what's wrong:
- Missing credentials
- Invalid password
- Connection issues
- etc.

## 🚀 Deployment

When deploying to Vercel/Netlify:
1. Add environment variables in dashboard:
   - `EMAIL_USER=Kartikpundir231@gmail.com`
   - `EMAIL_PASSWORD=your-app-password`
2. Redeploy

## 💡 Current Behavior

**Without configuration:**
- Form falls back to mailto link
- Opens user's email client
- Still works, but less professional

**With configuration:**
- Sends emails automatically
- Professional confirmation emails
- You get notifications
- Much better user experience!

## 🎯 Next Steps

1. Read **SETUP_EMAIL_NOW.md**
2. Get your Gmail App Password
3. Run `node test-email.js`
4. Test the contact form
5. Deploy with confidence!

---

Need help? All instructions are in **SETUP_EMAIL_NOW.md**
