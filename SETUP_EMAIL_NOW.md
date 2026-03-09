# 🚀 Setup Email Service (Quick Guide)

Your contact form is ready, but needs email credentials to work. Follow these steps:

## ⚡ Quick Setup (5 minutes)

### Step 1: Get Gmail App Password
1. Open: https://myaccount.google.com/apppasswords
2. Sign in with: **Kartikpundir231@gmail.com**
3. If you see "2-Step Verification is not enabled":
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification" first
   - Then go back to App Passwords
4. Select "Mail" and "Other (Custom name)"
5. Name it: "Portfolio Website"
6. Click "Generate"
7. **Copy the 16-character password** (remove spaces)

### Step 2: Add Password to Project
1. Open the file `.env.local` in your project root
2. Replace `your-app-password-here` with your password:

```env
EMAIL_USER=Kartikpundir231@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
```

### Step 3: Test Configuration
Run this command to test if it works:

```bash
node test-email.js
```

If successful, you'll see:
```
✅ Connection successful!
✅ Test email sent successfully!
🎉 SUCCESS! Check your inbox
```

### Step 4: Restart Server
```bash
# Stop current server (Ctrl+C)
npm run dev
```

## ✅ Done!

Now when someone fills out your contact form:
- You'll receive a notification email
- They'll receive an automatic confirmation email
- Everything works professionally!

## 🧪 Test Your Contact Form

1. Go to: http://localhost:3000
2. Scroll to Contact section
3. Fill out the form with your email
4. Click "Send Message"
5. Check your inbox!

## ❌ Troubleshooting

### Test script shows error
```bash
node test-email.js
```
This will tell you exactly what's wrong.

### "Failed to send email" in browser
- Make sure you ran `node test-email.js` successfully
- Restart the dev server after adding credentials
- Check .env.local has no spaces in the password

### Can't find App Passwords
- Enable 2-Step Verification first
- Use desktop browser (not mobile)
- Try incognito mode if you have multiple Google accounts

## 📝 Files Created

- `.env.local` - Your email credentials (never commit this!)
- `test-email.js` - Test script to verify setup
- `GET_APP_PASSWORD.md` - Detailed instructions
- `EMAIL_SETUP_GUIDE.md` - Complete documentation

## 🔒 Security

- `.env.local` is in `.gitignore` (won't be committed)
- App Passwords are safer than your real password
- You can revoke them anytime from Google settings

## 🆘 Still Need Help?

1. Read: `GET_APP_PASSWORD.md` for detailed steps
2. Run: `node test-email.js` to diagnose issues
3. Check: Your spam folder for test emails

---

**Current Status:**
- ✅ Email API created
- ✅ Contact form ready
- ⏳ Waiting for Gmail App Password
- ⏳ Need to test with `node test-email.js`

Once configured, your portfolio will have a fully functional contact form! 🎉
