# How to Get Your Gmail App Password (5 Minutes)

## Step 1: Enable 2-Step Verification
1. Go to: https://myaccount.google.com/security
2. Scroll down to "How you sign in to Google"
3. Click on "2-Step Verification"
4. If not enabled, click "Get Started" and follow the steps
5. Complete the setup (you'll need your phone)

## Step 2: Create App Password
1. Go to: https://myaccount.google.com/apppasswords
   - OR search "Google App Passwords" in Google
2. You might need to sign in again
3. In the "Select app" dropdown, choose "Mail"
4. In the "Select device" dropdown, choose "Other (Custom name)"
5. Type: "Portfolio Website"
6. Click "Generate"

## Step 3: Copy the Password
1. Google will show you a 16-character password (like: "abcd efgh ijkl mnop")
2. **IMPORTANT**: Copy this password immediately (you won't see it again!)
3. Remove the spaces: "abcdefghijklmnop"

## Step 4: Add to Your Project
1. Open the file `.env.local` in your project root
2. Replace `your-app-password-here` with your 16-character password
3. Save the file

Example:
```
EMAIL_USER=Kartikpundir231@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
```

## Step 5: Restart Your Server
```bash
# Stop the current server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

## Step 6: Test It!
1. Go to http://localhost:3000
2. Scroll to the Contact section
3. Fill out the form with your own email
4. Click "Send Message"
5. Check your inbox for the confirmation email!

## Troubleshooting

### "Failed to send email" error
- Make sure you removed all spaces from the App Password
- Verify 2-Step Verification is enabled
- Check that you restarted the server after adding the password

### Can't find App Passwords option
- Make sure 2-Step Verification is enabled first
- Try this direct link: https://myaccount.google.com/apppasswords
- You might need to use a desktop browser (not mobile)

### Email not arriving
- Check your spam/junk folder
- Verify the email address in the form is correct
- Check your Gmail "Sent" folder to confirm it was sent

## Security Notes
- Never share your App Password
- Never commit .env.local to Git (it's already in .gitignore)
- You can revoke and create new App Passwords anytime

## Need Help?
If you're stuck, you can:
1. Watch a YouTube tutorial: "How to create Gmail App Password"
2. Use the fallback mailto option (already in the code)
3. Contact me for help

---

**Once configured, your contact form will:**
- ✅ Send you notifications at Kartikpundir231@gmail.com
- ✅ Send automatic confirmation emails to visitors
- ✅ Show professional loading and success states
- ✅ Work perfectly on your deployed website
