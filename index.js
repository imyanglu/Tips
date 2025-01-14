const nodemailer = require("nodemailer");
const fs = require('fs')
// 发送邮件
async function sendEmail({ email,html}) {
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
        subject:"来自最好的Wii的提醒", // Subject line
        text: "text", // plain text body
        html, // html body
    });
  

}

const send = async () => {
    const html = fs.readFileSync('./index.html', {encoding:'utf-8'})

    let result = await sendEmail({email:'184588829247@qq.com',html})
    console.log(result)
}
 send()
