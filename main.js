import Discord from 'discord.js'
import lib from './functions.js'
const client = new Discord.Client();
import botman from "./botman.js";

client.on('ready', (message) => {
    console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
    let msg=message.content.toLowerCase();
    if (msg.substring(0,6) === 'botman') {
        message.channel.send(botman.sender(msg.slice(7)));
    }
});

client.login("ODY0MzQ2Njk1NDgyOTk4ODE1.YO0Hlg.C3EjxNkrhYuDr19m0o3wR40F28k");
