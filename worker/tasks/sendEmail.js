const SGmail = require("@sendgrid/mail");
SGmail.setApiKey(process.env.SEND_GRID);

function newUserEmail(email, name) {
  const msg = {
    to: email,
    from: "test@example.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>"
  };
  return SGmail.send(msg);
}

module.exports = {
  newUserEmail
};
