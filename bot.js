const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523664383965134858")
setInterval(function() {
channel.send(`#daily`);
}, 30)
})

client.login("NTIzNjc5NTg2MDA2MDczMzU3.DvdCuQ.Bh4UQ0lbNDzi209EmiT4UmdeMRM");
