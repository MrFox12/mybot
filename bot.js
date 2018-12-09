const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "*"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === `${prefix}claim`) {
    let myRole = message.guild.roles.get("521151450890502175")
    message.author.addRole(myRole).catch(console.error)
  }
});

client.login(process.env.BOT_TOKEN);
