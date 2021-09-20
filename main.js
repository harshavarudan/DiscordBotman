import Discord from 'discord.js'
import fs from "fs"
const client = new Discord.Client();
import botman from "./botman.js";
import functions from "./functions.js";
client.on('ready', () => {
    console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
    const prefix="botman"
    let msg=message.content.toLowerCase();
    if (msg.startsWith(prefix + " ping")) {
        message.channel.send("The ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`(not to be taken literally)");
    }
   else if (msg.startsWith(prefix+ " meme")){
        let number=msg.split(" ").length!==3?1:parseInt(msg.split(" ")[2])
        const memeLOC="./memes"
        fs.readdir(memeLOC,(err,files)=> {
            let temp=[]
            const msg=number>0?" ":"wtf is that number dude lol"
            while(number-->0)temp.push(`${memeLOC}/${files[functions.rand(files.length)]}`)
            message.channel.send(msg,{files:temp})
        })
    }
    else if (msg.substring(0,6) === prefix) {
        message.channel.send(botman.sender(msg.slice(7)));
    }
});

client.login("ODY0MzQ2Njk1NDgyOTk4ODE1.YO0Hlg.C3EjxNkrhYuDr19m0o3wR40F28k");
