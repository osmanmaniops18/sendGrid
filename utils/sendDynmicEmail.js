import sgMail from '@sendgrid/mail';

export const sendEmail = async (to) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: to,
    from: process.env.FROM,
    templateId: process.env.WELCOME_SENDGRID_TEMPLATE_ID,
    dynamicTemplateData: {
      name: 'Crownboth',

    },
   
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(`Error sending email: ${error}`);
  }
};
