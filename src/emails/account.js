const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

sgMail.send({
    to: 'nivas.programmer@gmail.com',
    from: 'dlnivas@hotmail.com',
    subject: 'This is my first creation',
    text: 'I hope this one actually gets to you'
});

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'dlnivas@hotmail.com',
        subject: 'Thanks for Joining in!',
        text: `Welcome to the App ${name}. Let me know how to get along with you.`
    })
}

const sendCancellationEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'dlnivas@hotmail.com',
        subject: 'Account Removed From our Servers.',
        text: `Hi ${name} . Sorry to see you leave. is there any thing
        we could have done to improve.
        `
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
