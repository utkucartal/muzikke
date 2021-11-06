module.exports = {
  name: "devam", 
  description: "Resume the paused Song",
  execute (client, message, args) {
      const { channel } = message.member.voice;
    if (!channel) {
   
      return message.channel.send(":x: Herhangi bir ses kanalında bulunmalısınız.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);
    if(!serverQueue) return message.channel.send('Oynatılan bir şarkı Bulunmuyor.')
    if(serverQueue.playing) return message.channel.send(`Duran bir şarkı yok.`)
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume(true)
  
  return message.channel.send(":white_check_mark:  | Duraklatılan şarkı sürdürüldü.") 
 }
    
    message.channel.send(":x: Duraklatılan bir şarkı yok.")
    
  }
}
