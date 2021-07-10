const { APIMessage, Structures } = require("discord.js");

require('./lineReply.js')

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class Message extends Structures.get("Message") {
  async lineReply(content, options) {

    let mentionRepliedUser = typeof ((options || content || {}).allowedMentions || {}).repliedUser === "undefined" ? true : ((options || content).allowedMentions).repliedUser;

    const apiMessage = content instanceof APIMessage ? content.resolveData() : APIMessage.create(this.channel, content, options).resolveData();
    Object.assign(apiMessage.data, { message_reference: { message_id: this.id } });

    if (!apiMessage.data.allowed_mentions || Object.keys(apiMessage.data.allowed_mentions).length === 0) {
      apiMessage.data.allowed_mentions = {
        parse: ["users", "roles", "everyone"]
      }
    }

    if (typeof apiMessage.data.allowed_mentions.replied_user === "undefined") {
      Object.assign(apiMessage.data.allowed_mentions, { replied_user: mentionRepliedUser });
    }

    if (Array.isArray(apiMessage.data.content)) {
      return Promise.all(apiMessage.split().map(x => {
        x.data.allowed_mentions = apiMessage.data.allowed_mentions;
        return x;
      }).map(this.lineReply.bind(this)));
    }

    const { data, files } = await apiMessage.resolveFiles();
    return this.client.api.channels[this.channel.id].messages
      .post({ data, files })
      .then(d => this.client.actions.MessageCreate.handle(d).message);
  }

  async lineReplyNoMention(content, options) {

    /*if (!options) {
      options = {
        allowedMentions: {
          repliedUser: false
        }
      }
    }

    if (options.allowedMentions) {
      if (options.allowedMentions.repliedUser !== false) {
        options.allowedMentions.repliedUser = false;
      }
    }*/

    const apiMessage = content instanceof APIMessage ? content.resolveData() : APIMessage.create(this.channel, content, options).resolveData();
    Object.assign(apiMessage.data, { message_reference: { message_id: this.id } });

    if (!apiMessage.data.allowed_mentions || Object.keys(apiMessage.data.allowed_mentions).length === 0) {
      apiMessage.data.allowed_mentions = {
        parse: ["users", "roles", "everyone"]
      }
    }

    Object.assign(apiMessage.data.allowed_mentions, { replied_user: false });

    if (Array.isArray(apiMessage.data.content)) {
      return Promise.all(apiMessage.split().map(x => {
        x.data.allowed_mentions = apiMessage.data.allowed_mentions;
        return x;
      }).map(this.lineReply.bind(this)));
    }

    const { data, files } = await apiMessage.resolveFiles();
    return this.client.api.channels[this.channel.id].messages
      .post({ data, files })
      .then(d => this.client.actions.MessageCreate.handle(d).message);
  }
}
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function Say(message, content)
{
    message.channel.send(content)
}

function Re(message, content)
{
    message.reply(content)
}

function LOG(content)
{
    console.log(content)
}

function Lreply(message, content)
{
    message.lineReply(content)
}

function Edit(msg, content, time) 
{
    setTimeout(() => 
    {
        msg.edit(content)
    }, time)    
}

function Delete(message, option, content, time)
{
	if(option !== undefined && option === "1")
	{
		message.channel.send(content).then(m => m.delete({timeout:time}))
	}
	else if(option !== undefined && option === "2")
	{
		message.reply(content).then(m => m.delete({timeout:time}))
	}
	else if(option !== undefined && option === "3")
	{
		message.lineReply(content).then(m => m.delete({timeout:time}))
	}
	else if(option !== undefined && option === "4")
	{
		message.lineReplyNoMention(content).then(m => m.delete({timeout:time}))
	}
	else if(option !== undefined && (option !== "1" || option !== "2" || option !== "3" || option !== "4")) return message.channel.send('Not Valid Option On `Delete Function`\n<Option : { 1, 2, 3, 4}>\n`1: Normal`\n`2: Reply with mention`\n`3: lineReply with mention`\n`4: lineReply Without Mention`')
	if(option === undefined) return
}








Structures.extend("Message", () => Message);
module.exports = {
    Say,
    Re,
    LOG,
    Lreply,
	Edit,
	Delete
}
