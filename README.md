# What is this?

A Quality of Life Discord Package

# Installation

`npm i dishub --save`

# Usage

```js
let Discord = require("discord.js");
let client = new Discord.Client();
let { Say , Re, LOG, Lreply } = require('dishub')

client.on("message", message => {

if (message.content === "ping") {
Say(message, "pong!")
}

})

client.login("YOUR TOKEN HERE")
```

# Available Options
Send as normal message
```js
Say(message, 'Content of the message you wanted to send')
```
Send message with Mention reply
```js
Re(message, 'Content of the message you wanted to send')
```
Basically Console.log()
```js
LOG('Content of the message you wanted to send')
```

# WIP
In line Reply ( If error, Don't Use it, I still trying to figure it out, since Inline reply are not in Discord.js V12 )
```js
Lreply(message, 'Content of the message you wanted to send')
```
