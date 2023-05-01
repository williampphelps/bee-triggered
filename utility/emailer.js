import nodemailer from 'nodemailer';

const emailer = nodemailer.createTransport({
  host: process.env.EMAILHOST,
  port: process.env.EMAILPORT,
  auth: {
    user: process.env.EMAILUSER,
    pass: process.env.EMAILPASS
  }
})


export default emailer;
