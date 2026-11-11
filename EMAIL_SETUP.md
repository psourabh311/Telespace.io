# Email Notification Setup Guide

## Overview
The contact form needs a backend service to send email notifications to `contact@telespace.in` when users submit queries.

## Options for Implementation

### Option 1: EmailJS (Easiest - No Backend Required)
**Recommended for quick deployment**

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create an email service
3. Create an email template with these variables:
   - `{{name}}`
   - `{{address}}`
   - `{{mobile}}`
   - `{{query}}`
   - `{{to_email}}` → contact@telespace.in

4. Install EmailJS:
```bash
npm install @emailjs/browser
```

5. Update `src/App.jsx` form submission:
```javascript
import emailjs from '@emailjs/browser';

// In form onSubmit:
emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    name: form.name,
    address: form.address,
    mobile: form.mobile,
    query: form.query,
    to_email: 'contact@telespace.in'
  },
  'YOUR_PUBLIC_KEY'
).then(() => {
  setSent(true);
  setTimeout(() => setSent(false), 5000);
  setForm({name:"", address:"", mobile:"", query:""});
});
```

---

### Option 2: Custom Backend API
**For production with more control**

Create a backend API (Node.js/Express example):

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, address, mobile, query } = req.body;
  
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'contact@telespace.in',
    subject: `New Query from ${name} - telespace.io`,
    html: `
      <h2>New Client Query</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Query:</strong> ${query}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    `
  };
  
  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

### Option 3: Serverless Function (Vercel/Netlify)
**Best for deployment on Vercel/Netlify**

Create `api/contact.js`:
```javascript
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, address, mobile, query } = req.body;
  
  // Configure your email service
  const transporter = nodemailer.createTransport({
    // Your email config
  });

  try {
    await transporter.sendMail({
      to: 'contact@telespace.in',
      subject: `New Query - ${name}`,
      html: `<!-- Email template -->`
    });
    
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
}
```

---

## Current Status
✅ Frontend form is ready and validated
✅ Email template created in `src/api/contact.js`
⚠️ Backend/Email service needs to be configured

## Next Steps
1. Choose one of the options above
2. Update contact number: Replace `9250002645` with actual number
3. Update corporate address when provided
4. Test email delivery before going live

## Testing
Test the form with real data to ensure:
- ✅ All fields are required
- ✅ Email notification reaches contact@telespace.in
- ✅ Email contains all form data
- ✅ Success message shows properly
