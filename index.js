const nodemailer = require("nodemailer");
// 发送邮件
async function sendEmail({ email, code }) {
    let transporter = await nodemailer.createTransport({
        host: "smtp.163.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "wii4winnie@163.com", // generated ethereal user
            //JZMNXBJEDADTJJEI
            pass: 'JMcecc7YXsLewrbA', // generated ethereal password
        },
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'wii4winnie@163.com', // sender address
        to: email, // list of receivers
        subject: "Lover 验证码" + code, // Subject line
        text: "time:" + new Date().toString(), // plain text body
        html: `code is <strong>${code}</strong>`, // html body
    });

}
sendEmail("499339182@qq.com",'55555')