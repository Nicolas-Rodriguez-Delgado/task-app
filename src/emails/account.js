const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'spastikcitizen@gmail.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const cancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'spastikcitizen@gmail.com',
        subject: 'Sorry that you are leaving us',
        text: `Goodbye dear ${name}! We are sorry that you are leaving and were wondering if there was something we could have done better`
    })
}

module.exports = {
    sendWelcomeEmail,
    cancelEmail
}