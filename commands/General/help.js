const simplydjs = require('simply-djs');
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js")
const { button, MessageButton, MessageActionRow, MessageMenuOption, MessageMenu } = require('discord-buttons');
const disbut = require("discord-buttons");
 
    let embed1 = new Discord.MessageEmbed()
      .setTitle('** <:blueheart:878156514018332703> Help Panel <:blueheart:878156514018332703>**')
      .setDescription('<a:fh_dot:884260150968471613> ** *Lunar*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField("<a:fh_dot:884260150968471613> COMMAND CATEGORIES",
        "**<a:867324402151718932:892090597433823323>  ADMIN\n<:709602052216586250:892889434654113863>  GENERAL\n<a:zTW_prplpopper:887805319902789662>  GIVEAWAY\n<:709732482320171023:892889434805121024>  INFO\n<a:TCC__loading:884252787444158504>  IMAGE\n<a:music:885178599680913540>  MUSIC\n ✅FUN\n<a:787506318629142528:891453513316565052>  UPTIMER**")
      .setThumbnail("z")
      .setImage('https://media.discordapp.net/attachments/878100707763449926/878850265036492820/standard.gif')
      .setFooter('Bot Made By Boba | Prefix: l.')
    let embed2 = new Discord.MessageEmbed()
      .setTitle('** <:blueheart:878156514018332703> Help Panel <:blueheart:878156514018332703>**')
      .setDescription('<a:fh_dot:884260150968471613> ** *Lunar*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<a:867324402151718932:892090597433823323> MODERATION",
        "`ban` `unban` `kick` `addemoji` `addrole` `removerole` `announce` `setnick` `resetnick` `ticket` `lockchannel` `purge` `slowmode` `mute` `unmute` `purge-channel`")
      .setThumbnail("https://media.discordapp.net/attachments/877371943089758248/878231068967317585/e9754be68802ab49fe48787398c40ba3.jpg")
      .setImage('https://media.discordapp.net/attachments/878100707763449926/878850265036492820/standard.gif')
      .setFooter('Bot Made By Boba | Prefix: l.')
    let embed3 = new Discord.MessageEmbed()
      .setTitle('** <:blueheart:878156514018332703> Help Panel <:blueheart:878156514018332703>**')
      .setDescription('<a:fh_dot:884260150968471613> ** *Lunar*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<a:TCC_IconNote:888656817259937842> GENERAL",
        "`servericon` `calculator` `invite` `membercount` `help` `serverinfo` `leaderboard` `snipe` `embed`")
      .setThumbnail("https://media.discordapp.net/attachments/877371943089758248/878231068967317585/e9754be68802ab49fe48787398c40ba3.jpg")
      .setImage('https://media.discordapp.net/attachments/878100707763449926/878850265036492820/standard.gif')
      .setFooter('Bot Made By Boba | Prefix: l.')
    let embed4 = new Discord.MessageEmbed()
      .setTitle('** <:blueheart:878156514018332703> Help Panel <:blueheart:878156514018332703>**')
      .setDescription('<a:fh_dot:884260150968471613> ** *Lunar*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<a:zTW_prplpopper:887805319902789662> GIVEAWAY",
        "`gstart` `gend` `greroll`")
      .setThumbnail("https://media.discordapp.net/attachments/877371943089758248/878231068967317585/e9754be68802ab49fe48787398c40ba3.jpg")
      .setImage('https://media.discordapp.net/attachments/878100707763449926/878850265036492820/standard.gif')
      .setFooter('Bot Made By Boba | Prefix: l.')
    let embed5 = new Discord.MessageEmbed()
      .setTitle('** <:blueheart:878156514018332703> Help Panel <:blueheart:878156514018332703>**')
      .setDescription('<a:fh_dot:884260150968471613> ** *Lunar*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<:blueheart:878156514018332703> INFO",
        "`avatar` `bug-report` `feedback` `developer` `help` `position` `urban` `weather` `status` `channelinfo` `rolememberinfo`")
      .setThumbnail("https://media.discordapp.net/attachments/877371943089758248/878231068967317585/e9754be68802ab49fe48787398c40ba3.jpg")
      .setImage('https://media.discordapp.net/attachments/878100707763449926/878850265036492820/standard.gif')
      .setFooter('Bot Made By Boba | Prefix: l.')
    let embed6 = new Discord.MessageEmbed()
      .setTitle('** <:blueheart:878156514018332703> Help Panel <:blueheart:878156514018332703>**')
      .setDescription('<a:fh_dot:884260150968471613> ** *Lunar*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<a:TCC__loading:884252787444158504> Image",
        "`tweet` `deepfry` `eject` `meme` `kangaroo` `dog` `cat` `changemymind` `fire` `respect` `scary`")
      .setThumbnail("https://media.discordapp.net/attachments/877371943089758248/878231068967317585/e9754be68802ab49fe48787398c40ba3.jpg")
      .setImage('https://media.discordapp.net/attachments/878100707763449926/878850265036492820/standard.gif')
      .setFooter('Bot Made By Boba | Prefix: l.')
     let embed7 = new Discord
     .MessageEmbed()
       .setTitle('** <:blueheart:878156514018332703> Help Panel <:blueheart:878156514018332703>**')
      .setDescription('<a:fh_dot:884260150968471613> ** *Lunar*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<a:TCC_lovely_pixel_heart:888657981103829012> FUN",
        "`fight` `rps` `coinflip` `meme` `reverse` `hangman` `trivia` `fact` `Shuffle-guess`")
      .setThumbnail("https://media.discordapp.net/attachments/877371943089758248/878231068967317585/e9754be68802ab49fe48787398c40ba3.jpg")
      .setImage('https://media.discordapp.net/attachments/878100707763449926/878850265036492820/standard.gif')
      .setFooter('Bot Made By Boba | Prefix: l.')
      let embed8 = new Discord
.MessageEmbed()
    .setTitle('** <:blueheart:878156514018332703> Help Panel <:blueheart:878156514018332703>**')
      .setDescription('<a:fh_dot:884260150968471613> ** *Lunar*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<a:uptimer:876630668044533820> UPTIMER",
        "`add` `calc` `stats` `total` `ping` `projects` `remove`")
      .setThumbnail("https://media.discordapp.net/attachments/878247096455692288/878252738042032128/e9754be68802ab49fe48787398c40ba3.jpg")
      .setImage('https://media.discordapp.net/attachments/878100707763449926/878850265036492820/standard.gif')
      .setFooter('Bot Made By Boba | Prefix: l.')

    

module.exports = {
  name: "help",
  aliases: [""],
  usage: "unban",
  description: "unbans member",


  run: async (client, message, args) => {
    let cmduser = message.author;
    let menuoptions = [
       {
        value: "BACK TO START", description: "Starting Menu!",
        replymsg: embed1, emoji: "887806752643481650" //optional
      },{
        value: "MODERATION", description: "Moderation Commands!",
        replymsg: embed2, emoji: "887805506570289203" //optional
      }, {
        value: "GENERAL", description: "General Commands!",
        replymsg: embed3, emoji: "887805199547269171" //optional
      }, {
        value: "GIVEAWAY", description: "Giveaway Commands!",
        replymsg: embed4, emoji: "887805319902789662" //optional
      }, {
        value: "INFO", description: "Information Commands!",
        replymsg: embed5, emoji: "878156514018332703" //optional
      }, {
        value: "IMAGE", description: "Image Commands!",
        replymsg: embed6, emoji: "884252787444158504" //optional
      }, {
        value: "FUN", description: "Fun Commands!",
        replymsg: embed7, emoji: "887805689655853116" //optional
      }, {
        value: "UPTIME", description: "Uptime Commands!",
        replymsg: embed8, emoji: "887806366738169877" },//optional
        ]
   // define the selection
    let Selection = new MessageMenu()
      .setID('MenuSelection')
      .setMaxValues(1) //OPTIONAL, this is how many values you can have at each selection
      .setMinValues(1) //OPTIONAL , this is how many values you need to have at each selection
      .setPlaceholder('Click me to make a Selection!');  //message in the content placeholder
    menuoptions.forEach(option => {
      let row = new MessageMenuOption()
        .setLabel(option.label ? option.label : option.value)
        .setValue(option.value)
        .setDescription(option.description)
        .setDefault()
      if (option.emoji) row.setEmoji(option.emoji)
      Selection.addOption(row)
    })
    //define the embed
   
    let MenuEmbed = new Discord.MessageEmbed()
      .setTitle('** <:769926156098076702:891458085573505114> Help Panel <:769926156098076702:891458085573505114>**')
      .setDescription('<a:797855362694774804:891459284183941170>> ** *Lunar*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField("<a:797855362694774804:891459284183941170> COMMAND CATEGORIES",
        "**<a:867324402151718932:892090597433823323>  ADMIN\n <:709732482320171023:892889434805121024> GENERAL\n<a:760603876649992262:891240973009580053>  GIVEAWAY\n<:709602052216586250:892889434654113863> INFO\n<:736686100839661690:894930759901675550> IMAGE\n<a:778521981468540960:891240754993844244>  MUSIC\n <a:774991174963953734:891461563402289273>  FUN\n<a:77ba453a8bc94763bc49e6a663fd509d:892035791449100348>  UPTIMER**")
      .setThumbnail("https://media.discordapp.net/attachments/877371943089758248/878231068967317585/e9754be68802ab49fe48787398c40ba3.jpg")
      .setImage('https://media.discordapp.net/attachments/878100707763449926/878850265036492820/standard.gif')
      .setFooter('Bot Made By Boba | Prefix: l.')


    
    //send the menu msg
    let menumsg = await message.channel.send(MenuEmbed, Selection                        )
    //function to handle the menuselection
    function menuselection(menu) {
      let menuoptiondata = menuoptions.find(v => v.value == menu.values[0])
      menu.reply.send(menuoptiondata.replymsg, true,);
    }
    //Event
    client.on('clickMenu', (menu) => {
      if (menu.message.id === menumsg.id) {
        if (menu.clicker.user.id === cmduser.id) menuselection(menu);
        else menu.reply.send(`:x: You are not allowed to do that! Only: <@${cmduser.id}>`, true);
      }
    });
  }
}