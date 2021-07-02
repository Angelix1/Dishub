# What is this?

A Quality of Life Discord Package

# Installation

`npm i dishub --save`

# Usage

```
let Discord = require("discord.js");
let client = new Discord.Client();
let DH = require('dishub')

client.on("message", message => {

if (message.content === "ping") {
DH.Say(message, "pong!")
}

})

client.login("YOUR TOKEN HERE")
```

# Available Options
Send as normal message
```
DH.Say(message, 'Content of the message you wanted to send')
```
Send message with Mention reply
```
DH.RE(message, 'Content of the message you wanted to send')
```
Basically Console.log()
```
LOG('Content of the message you wanted to send')
```

# WIP
In line Reply ( If error, Don't Use it, I still trying to figure it out, since Inline reply are not in Discord.js V12 )
```
Lreply(message, 'Content of the message you wanted to send')
```
