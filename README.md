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

if (message.content === "ping") {
Re(message, "pong!")
}

if (message.content === "ping") {
LOG("pong!")
}

if (message.content === "ping") {
Lreply(message, "pong!")
}

})

client.login("YOUR TOKEN HERE")
```

**Explanations**
```js
Say(message, "pong!")
```
1. `Say` is the package's Function for normal message.
2. `message` is mesage event where you defined it as message or else. If you defined message event as msg then the code will be like this.
```js
Say(msg, "pong!")
```
3. `"pong!"` or content of thing you wanted to send. It Self-Explanatory.
# Available Options
Send as normal message

![Code](https://cdn.discordapp.com/attachments/860798919311360030/860799177306931200/unknown.png)
![Output](https://cdn.discordapp.com/attachments/860798919311360030/860799307871813642/unknown.png)
```js
Say(message, 'Content of the message you wanted to send')
```

Send message with Mention reply

![Code](https://cdn.discordapp.com/attachments/860798919311360030/860799441501421588/unknown.png)
![Output](https://cdn.discordapp.com/attachments/860798919311360030/860799815104069642/unknown.png)
```js
Re(message, 'Content of the message you wanted to send')
```
Basically Console.log()

![Code](https://cdn.discordapp.com/attachments/860798919311360030/860800271247605790/unknown.png)
![Output](https://cdn.discordapp.com/attachments/860798919311360030/860800158634344448/unknown.png)
```js
LOG('Content of the message you wanted to send')
```

# WIP (Inline Reply)
In line Reply ( If error, Don't Use it, I still trying to figure it out, since Inline reply are not in Discord.js V12 )

![Code](https://cdn.discordapp.com/attachments/860798919311360030/860800434389123102/unknown.png)
![Output](https://cdn.discordapp.com/attachments/860798919311360030/860800506179354634/unknown.png)
```js
Lreply(message, 'Content of the message you wanted to send')
```
