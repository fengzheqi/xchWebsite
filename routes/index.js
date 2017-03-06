var express = require('express');
var router = express.Router();
'use strict';
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendMail',function(req, res, next){
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@XX.com',
      pass: 'yourEmailPassword'
    }
  });
  var mailContent = req.body.name + '<b>' + req.body.comments + '</b>';
  // setup email data with unicode symbols
  var mailOptions = {
    from: '"Tommyzqfeng" <fengzheqiyx@gmail.com>', // sender address
    to: req.body.email, // list of receivers
    subject: '你的个人网站有新的留言', // Subject line
    text: req.body.comments, // plain text body
    html: mailContent // html body
  };
  console.log(mailOptions);
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
  res.redirect('/');
});

module.exports = router;
