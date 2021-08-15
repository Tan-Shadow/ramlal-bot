require('dotenv').config();
// const axios = require('axios');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Ready!');
});

//read a message and reply
client.on('messageCreate', message => {
    if (message.content.startsWith('!hello')) {
        message.reply('Hello!');
    }
});

client.login(process.env.RAMLAL_TOKEN)