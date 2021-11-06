module.exports = {
  name: "döngü",
  description: "LOOP THE QUEUE",
  execute (client, message, args) {
    
    const { channel } = message.member.voice;
    if (!channel) {
  
      return message.channel.send(":x: Herhangi bir ses kanalında bulunmalısınız.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send(":x: Döngüye alabileceğim bir şarkı bulamadım.");
    }
    

    serverQueue.loop = !serverQueue.loop
    
    
    
    message.channel.send(`:white_check_mark: Döngü şimdi **${serverQueue.loop ? "Aktif" : "Deaktif"}**`)
    
    
    
    
  }
}
