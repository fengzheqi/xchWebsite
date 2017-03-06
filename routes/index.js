var express = require('express');
var router = express.Router();
'use strict';
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sendMail',function(req, res, next){
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fengzheqiyx@gmail.com',
      pass: 'gmail@2045635683'
    }
  });
  // setup email data with unicode symbols
  var mailOptions = {
    from: '"Tommyzqfeng" <fengzheqiyx@gmail.com>', // sender address
    to: '811756202@qq.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
});

module.exports = router;
