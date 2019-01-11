const nodemailer = require('nodemailer');
const config = require('../config');

const mailConfig = {
  host: config.MAIL_HOST,
  port: config.MAIL_PORT,
  secure: config.MAIL_SECURE,
  auth: {
    user: config.MAIL_USER,
    pass: config.MAIL_PASSWORD,
  },
};
const transporter = nodemailer.createTransport(mailConfig, {
  from: 'HelloAlex <noreply@helloalex.io>',
  sender: 'HelloAlex <noreply@helloalex.io>',
  replyTo: 'HelloAlex <support@helloalex.io>',
  attachDataUrls: true,
  list: {
    help: 'support@helloalex.io?subject=help',
    unsubscribe: {
      url: 'https://helloalex.io/unsubscribe',
      comment: 'Unsubscribe',
    },
  },
});
transporter.verify(error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Mailer is ready to take messages');
  }
});
module.exports = transporter;
