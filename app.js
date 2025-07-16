const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

// Create a new client instance

const client = new Client({
  authStrategy: new LocalAuth({
    dataPath: "sessionfolder",
  }),
});

// When the client is ready, run this code (only once)
client.on("ready", () => {
  console.log("Client is ready!");
});

// When the client received QR-Code
client.on("qr", (qr) => {
  console.log("QR RECEIVED", qr);
  qrcode.generate(qr, { small: true });
});

client.on("message_create", (message) => {
  if (message.body === "!ping") {
    // send back "pong" to the chat the message was sent in
    client.sendMessage(message.from, "pong");
  }
});

// Start your client
client.initialize();

//disini tambhaan
//disini tambhaan2
