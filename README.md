# Ramlal Bot

## Description
## Requirements
---------------------------------------
 - Node v16.6

## Setting up Development Environment
-----------------------------------------
Fork this repository and clone it to your local machine using
```bash
git clone https://github.com/<YOUR USERNAME>/ramlal-bot
```
Install the dependencies using 
 ```
 npm install
 ```
Get Your Bot Token from [Discord Developer Portal](https://discordapp.com/developers/applications/me)

Set up `.env` file with the following content
```
RAMLAL_TOKEN=<YOUR BOT TOKEN>
NODE_ENV=development
```

Run the bot
```
npm run dev
```
To reload bot after every change (you need to have `nodemon` installed)
```
npm run devc
```
