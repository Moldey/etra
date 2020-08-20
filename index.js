const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const welcome = require('./welcome')


const prefix = '!';

const fs = require('fs');
const resetWarns = require('./commands/rwarns');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.on("ready", () => {
  function randomStatus() {
    let status = ["Prefix: [!]", "Made by Moldey#0394", "!help", "Im Gud"] // You can change it whatever you want.
    let rstatus = Math.floor(Math.random() * status.length);
    
    // client.user.setActivity(status[rstatus], {type: "WATCHING"}); 
    // You can change the "WATCHING" into STREAMING, LISTENING, and PLAYING.
    // Example: streaming
    
    client.user.setActivity(status[rstatus], {type: "LISTENING"});
  }; setInterval(randomStatus, 2000) // Time in ms. 30000ms = 30 seconds. Min: 20 seconds, to avoid ratelimit.
  
  console.log('Ready You Bitch')
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').run(client, message, args);
    } else if (command == 'kick') {
        client.commands.get('kick').run(client, message, args);
    } else if (command == 'ban') {
        client.commands.get('ban').run(client, message, args);
    } else if (command == 'clear') {
        client.commands.get('clear').run(client, message, args);
    } else if (command == 'mute') {
        client.commands.get('mute').run(client, message, args);
    } else if (command == 'unmute') {
        client.commands.get('unmute').run(client, message, args);
    } else if (command == 'warn') {
        client.commands.get('warn').run(client, message, args);
    } else if (command == 'warnings') {
        client.commands.get('warnings').run(client, message, args);
    } else if (command == 'rwarns') {
        client.commands.get("rwarns").run(client, message, args);
    } else if (command == 'unban') {
        client.commands.get("unban").run(client, message, args);
    } else if (command == 'help') {
        client.commands.get("help").run(client, message, args);
    } else if (command == 'lock') {
        client.commands.get("lock").run(client, message, args);
    } else if (command == 'say') {
        client.commands.get("say").run(client, message, args);
    } else if (command == 'covid') {
        client.commands.get("covid").run(client, message, args);
    } else if (command == 'bal') {
        client.commands.get("bal").run(client, message, args);
    }  else if (command == 'work') {
        client.commands.get("work").run(client, message, args);
    }   else if (command == 'meme') {
        client.commands.get("meme").run(client, message, args);
    }   else if (command == 'giveaway') {
        client.commands.get("giveaway").run(client, message, args);
    }   else if (command == 'dm') {
        client.commands.get("dm").run(client, message, args);
    }   else if (command == 'poll') {
        client.commands.get("poll").run(client, message, args);
    }   else if (command == 'trivia') {
        client.commands.get("trivia").run(client, message, args);
    }



});




client.login('NzQ2MDY5MjE4MTEzNjE3OTMz.Xz69Gg.LR41n9XOopoHTud1cokuYS84q80');
