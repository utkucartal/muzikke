module.exports = {
  name: "atla",
  description: "Skip the song or shift song to next",
  execute(client, message, args) {
    const { channel } = message.member.voice;

    if (!channel) {
  
      return message.channel.send(":x: Herhangi bir ses kanalında bulunmalısınız.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send(":x: Atlayabileceğim bir şarkı yok.");
    }

    serverQueue.connection.dispatcher.end();
    message.channel.send(":white_check_mark:  | Şarkı geçildi.");
  }
};
