require('./lineReply.js')

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
module.exports = {
    Say,
    Re,
    LOG,
    Lreply
}