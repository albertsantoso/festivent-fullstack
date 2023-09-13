const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "festiventmgmt@gmail.com",
        pass: "owgtgomwbhzkzcqv"
    },
    tls: {
        rejectUnauthorized: false, // do not fail on invalid certs
    }
})

module.exports = transporter