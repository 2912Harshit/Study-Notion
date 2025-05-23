const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body) =>{
    try {
      console.log(process.env.MAIL_HOST,process.env.MAIL_PASS,process.env.MAIL_USER);
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS,
            }
          })

          let info = await transporter.sendMail({
            from: "Harshit Aildasani - StudyNotion" , // sender address
            to: `${email}`, 
            subject: `${title}`, 
            html: `${body}`, // plain text body
          });

            return info;
        
    } catch (error) {
        console.log("Error in mailSender", error.message);
    }
}

module.exports = mailSender;