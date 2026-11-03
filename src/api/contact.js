// Contact Form API Handler
// This function sends query data to the registered email

export async function sendContactQuery(queryData) {
  try {
    // For production: Replace this with your actual email service
    // Options: EmailJS, SendGrid, AWS SES, or custom backend API
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: queryData.name,
        email: queryData.email,
        mobile: queryData.mobile,
        company: queryData.company || 'Not provided',
        query: queryData.query,
        timestamp: new Date().toISOString(),
        recipient: 'contact@telespace.in' // Owner's registered email
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send query');
    }

    return { success: true };
  } catch (error) {
    console.error('Contact query error:', error);
    return { success: false, error: error.message };
  }
}

// Email template for the notification to owner
export function generateOwnerEmailTemplate(queryData) {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; }
    .header { background: #000; color: #00D9FF; padding: 20px; text-align: center; }
    .content { background: white; padding: 30px; margin-top: 20px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #7C3AED; }
    .value { margin-top: 5px; padding: 10px; background: #f5f5f5; border-radius: 5px; }
    .important { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>telespace.io</h1>
      <p>NEW CLIENT QUERY RECEIVED</p>
    </div>
    <div class="content">
      <h2>⚠️ Action Required - Client Query</h2>
      
      <div class="important">
        <strong>CONTACT DETAILS (Private - Not shown publicly)</strong>
      </div>
      
      <div class="field">
        <div class="label">📧 Email Address:</div>
        <div class="value"><a href="mailto:${queryData.email}">${queryData.email}</a></div>
      </div>
      
      <div class="field">
        <div class="label">📱 Contact Number:</div>
        <div class="value"><a href="tel:${queryData.mobile}">${queryData.mobile}</a></div>
      </div>
      
      <div class="field">
        <div class="label">👤 Name:</div>
        <div class="value">${queryData.name}</div>
      </div>
      
      <div class="field">
        <div class="label">🏢 Company/Organization:</div>
        <div class="value">${queryData.company || 'Not provided'}</div>
      </div>
      
      <div class="field">
        <div class="label">💬 Query/Requirement:</div>
        <div class="value">${queryData.query}</div>
      </div>
      
      <div class="field">
        <div class="label">🕐 Received At:</div>
        <div class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
      </div>

      <div style="margin-top: 30px; padding: 15px; background: #e3f2fd; border-radius: 5px;">
        <strong>📌 Note:</strong> This query has been posted publicly on the website (name, company, and query only). Email and phone number are private to you.
      </div>
    </div>
    <div class="footer">
      <p>This is an automated notification from telespace.io contact form</p>
      <p><strong>YOUR ICT PARTNER</strong></p>
      <p>Please respond within 24 hours</p>
    </div>
  </div>
</body>
</html>
  `;
}
