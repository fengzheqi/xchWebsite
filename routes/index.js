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
      user: 'xxxxxx@xx.com',
      pass: 'xxxxx'
    }
  });
  var mailContent = '<div>你好，你的个人网站有新的留言，详情如下：</div>' +
          '<div>留言人姓名：' + req.body.name + '</div>' +
          '<div>留言人邮箱： ' + req.body.email + '</div>' +
          '<div>留言内容：' + req.body.comments + '</div>';
  // setup email data with unicode symbols
  var mailOptions = {
    from: '"Tommyzqfeng" <fengzheqiyx@gmail.com>', // sender address
    to: 'xxxx', // list of receivers
    subject: '你的个人网站有新的留言', // Subject line
    text: req.body.comments, // plain text body
    html: mailContent // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(200).json({data:0});
    } else {
      console.log('Message %s sent: %s', info.messageId, info.response);
      res.status(200).json({data:1});
    }
  });
});

module.exports = router;
