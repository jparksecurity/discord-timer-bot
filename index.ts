import Discord = require("discord.js");
const client: Discord.Client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message: Discord.Message) => {
  if (message.content === "!timer") {
    message.channel.send("5 min timer starts.");
    setTimeout(() => message.channel.send("1 min left."), 4 * 60 * 1000);
    setTimeout(() => message.channel.send("5 min is up."), 5 * 60 * 1000);
  }
});

client.login(process.env.BOT_TOKEN);
