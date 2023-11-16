import sgMail from '@sendgrid/mail';

export const sendEmail = async (to, subject, text) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: to,
    from: process.env.FROM,
    subject: subject,
    text: text,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(`Error sending email: ${error}`);
  }
};
