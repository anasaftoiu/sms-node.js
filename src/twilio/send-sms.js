const config = require("../config");
const client = require("twilio")(config.accountSid, config.authToken);



async function sendMessage(body, phone) {
  try {
    const message = await client.messages.create({
      to: phone,
      from: '+12542696199',
      body
    });
   // console.log(message.side)
    return message;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { sendMessage };