require('dotenv').config()
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')

router.get('/', (req, res) => {
    res.send("This is your email content")

})

router.post('/', (req, res) => {
    const {fname, email, company, message, subject} = req.body
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS
        }
      });
      
      let mailOptions = {
        from: email,
        to: 'pupuma.azabenathi@gmail.com',
        subject: subject,
        text: `Hi I am ${fname}, from ${company}:
        \n${message}
        \nKind Ragards,\n${fname}\n${email}
        `
      };
      
      transporter.sendMail(mailOptions,(error, info) =>{
        if (error) {
          console.log(error);
          res.status(404).send('Email cannot be sent')
        } else {
          console.log('Email sent: ' + info.response);
          res.send({msg:'Message sent successfully!'})
        }
      });
})


module.exports = router;