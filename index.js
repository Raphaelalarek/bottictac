
const Discord = require("discord.js")
const fs = require("fs")
const config = require("config.json")
const client = new Discord.Client()
var prefix = '!'




client.on('message', message => {
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if(msg.startsWith(prefix + 'purge')) {
        async function purge() {
            message.delete();

if(!message.member.roles.find("name", "bot-commander")) {
    message.channel.send('You need the\`bot-commander\` role to use this command.')
    return;

}

            if(isNaN(args[0])) {
                message.channel.send('please use a number as your arguments. \n Usage' + prefix + 'purge <amount>');
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + ' messages found, deleting...');

            message.channel.bulkDelete(fetched)
            .cratch(error => message.channel.send('Error ' + error))
        }

        purge();
    }
})




client.login(config.token);
client.on('ready', function(){
    client.user.setActivity('Tic Tac... !')
})

client.on("guildMemberAdd", member =>{
    let embed = new Discord.RichEmbed()
    .setColor('#ffc100')
    .setAuthor(member.user.username, member.user.displayAvatarURL)
    .setDescription(':tada:  Dêpeche toi ! ' + member +  ' Le temps tourne :stopwatch:')
    .setFooter(' Serveur LBRP / Enigmes ' + member.guild.name)
    member.guild.channels.get('694549971382435882').send(embed)
    member.addRole("694273254302548069")
});



client.on("ready", () => {
    console.log("prêt à travailler !")
});

client.on("message", message => {
    if(message.content[0] === prefix) {
        if(message.content === "!197358246") {
            message.delete(1000);
            message.author.createDM().then(channel => {
                channel.send('Bien joué à toi ! Tu as terminé la première étape :nerd_face:. Voila le lien que tu attends je pense ;) **Lien**: https://xxraphyxx.wixsite.com/monsite');
            }).catch(console.error);
            
        
        }}
    })

client.on('messageReactionAdd', (reaction, member) =>{
    if(reaction.emoji.name === ":100:")
        member.addRole("694637451343429682")
    
    
})

