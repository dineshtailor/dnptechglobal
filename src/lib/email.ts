import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface ContactEmailData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

export async function sendContactNotification(data: ContactEmailData) {
  const serviceLabels: Record<string, string> = {
    telecom: "Telecom Solutions",
    integration: "Solution Integration",
    cloud: "Cloud Services",
    devops: "DevOps Services",
    software: "Software Development",
    consulting: "IT Consulting",
    other: "Other",
  };

  const mailOptions = {
    from: `"DnP Technologies Website" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFICATION_EMAIL,
    replyTo: data.email,
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold; width: 150px;">Name:</td>
            <td style="padding: 10px; background: #f9fafb;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Email:</td>
            <td style="padding: 10px; background: #f9fafb;">
              <a href="mailto:${data.email}">${data.email}</a>
            </td>
          </tr>
          ${data.company ? `
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Company:</td>
            <td style="padding: 10px; background: #f9fafb;">${data.company}</td>
          </tr>
          ` : ""}
          ${data.phone ? `
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; background: #f9fafb;">${data.phone}</td>
          </tr>
          ` : ""}
          ${data.service ? `
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Service Interested:</td>
            <td style="padding: 10px; background: #f9fafb;">${serviceLabels[data.service] || data.service}</td>
          </tr>
          ` : ""}
        </table>

        <div style="margin-top: 20px;">
          <h3 style="color: #374151;">Message:</h3>
          <div style="background: #f9fafb; padding: 15px; border-left: 4px solid #0891b2; white-space: pre-wrap;">
            ${data.message}
          </div>
        </div>

        <p style="margin-top: 30px; color: #6b7280; font-size: 12px;">
          This email was sent from the DnP Technologies website contact form.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error };
  }
}
