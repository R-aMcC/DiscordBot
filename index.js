//REQUIREMENTS
const Discord = require("discord.js")
const client = new Discord.Client()
const { Client, MessageEmbed } = require('discord.js');
const Database = require("@replit/database")
const fetch = require("node-fetch")
const keepAlive = require("./server")
const db = new Database()
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const myKey = process.env['API_KEY']
const myUuid = '79b13be7-1fa8-4337-8f48-8f95fec6f9ce'
const myToken = process.env['TOKEN']




//VARIABLES!
var usedVar = 0
var value1=0
var success = false
var value = 0 
var defaultPrefix = ("es!")
var newPrefix = ("null")
var prefix = ("es!")
var oldPrefix
var command = ("prefix set")
var commandDescription = ("Sets the prefix of the server. The current prefix is "+prefix)
var command1 = (prefix+"help")
var commandDescription1 = ("Shows a list of all the commands")
var command2 = (prefix+"apply")
var commandDescription2 = ("Sends in an application to join the guild")
var command3 = (prefix+"stats")
var commandDescription3 = ("Shows the stats of a player (Please specify the game)")
var command4
var commandDescription4
var requiredSkywars1 = 7
var requiredSkywars2 = 12
var requiredBedwars1 = 35
var requiredBedwars2 = 45
var requiredDuels1 = 80
var requiredDuels2 = 200
var ign = "hypixel"
var oldIgn = "asjkdnaskdjnakjsndkjanksjndjwoaisjdksjmankjndiwjaksnd"
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}


//FUCNTIONS
function roundDecimal2(usedVar){
  usedVar = usedVar*100
  usedVar = Math.round(usedVar)
  usedVar = usedVar/100
  return usedVar
}
function makeUndefined0(var1){
  if(var1 === undefined){
    var1 = 0
  }
  return var1
}
function makeNaN0(var1){
  if(Number.isNaN(var1)){
    var1 = 0
  }
  return var1
}




client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  usedVar = 1.345323422342365
  var finalVar = roundDecimal2(usedVar)
  var nan = NaN
  var nan = makeNaN0(nan)
})


//APPLICATION
client.on("message", (message) => {
  if (message.content.startsWith(command1)) {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Help')
	.setDescription('Here are all the commands')
	.addFields(
		{ name: command, value: commandDescription },
		{ name: command1, value: commandDescription1 },
		{ name: command2, value: commandDescription2 },
		{ name: command3, value: commandDescription3 },
	)
message.channel.send(exampleEmbed);
  }else
 if (message.content.startsWith(command2)) {
   ign = message.content.slice(command2.length).trim().split(/ +/g)
   ign = ign.toString()
   ignNTime = ign 
   if(ign !== oldIgn){
     var weMadeIt = true
    var json_obj = JSON.parse(Get("https://api.hypixel.net/player?key="+myKey+"&name="+ign));
   }
   
   oldIgn = ign

   apiWorks = json_obj.success
   
   if(apiWorks === true){
     playerTest = json_obj.player
     if(playerTest !== "null"){
     skywarsLevel = json_obj.player.achievements.skywars_you_re_a_star
     duelWins = json_obj.player.stats.Duels.wins
     bedwarsLevel = json_obj.player.achievements.bedwars_level
     
    const embed = new MessageEmbed()
      .setColor(0x3463d0)
  	  .setTitle("Application form")
  	  .setDescription('***You must have 2 of the following***')
	  .addFields(
    { name: '***Your stats***', value: '\u200B', inline: true },
    { name: '\u200B', value: '\u200B', inline: true },
    { name: '***Required stats***', value: '\u200B', inline: true },
		{ name: "Bedwars level", value: bedwarsLevel, inline: true},
    { name: '\u200B', value: '\u200B', inline: true },
    { name: "Required level", value: "35", inline: true},
		{ name: "Skywars level", value: skywarsLevel, inline: true },
    { name: '\u200B', value: '\u200B', inline: true },
    { name: "Required level", value: "7", inline: true},
		{ name: "Duel wins", value: duelWins, inline: true},
    { name: '\u200B', value: '\u200B', inline: true },
    { name: "Required wins", value: "80", inline: true},
    { name: '***OR***', value: '***one of the following***', inline: false },
    { name: "Bedwars level", value: bedwarsLevel, inline: true},
    { name: '\u200B', value: '\u200B', inline: true },
    { name: "Required level", value: "45", inline: true},
		{ name: "Skywars level", value: skywarsLevel, inline: true },
    { name: '\u200B', value: '\u200B', inline: true },
    { name: "Required level", value: "12", inline: true},
		{ name: "Duel wins", value: duelWins, inline: true},
    { name: '\u200B', value: '\u200B', inline: true },
    { name: "Required wins", value: "200", inline: true},
	)
    message.channel.send(embed);

    if(bedwarsLevel > requiredBedwars1){
      value1 = value1+1
    }
    if(skywarsLevel > requiredSkywars1){
      value1 = value1+1
    }
    if(duelWins > requiredDuels1){
      value1 = value1+1
    }
    if(bedwarsLevel > requiredBedwars2){
      value1 = value1+2
    }
    if(skywarsLevel > requiredSkywars2){
      value1 = value1+2
    }
    if(duelWins > requiredDuels2){
      value1 = value1+2
    }
    if(value1 > 1){
      var confirmed = true
    }
    let member = message.member
    let role = message.guild.roles.cache.get("833808210883641376");
    let role1 = message.guild.roles.cache.get("852171226650771507");
    let role2 = message.guild.roles.cache.get("852171572092469268");
    member.roles.add(role).catch(console.error);
    member.roles.add(role1).catch(console.error);
    member.roles.add(role2).catch(console.error);
    const embed1 = new MessageEmbed()
      .setColor(0x00FF00)
      .setTitle("Congrats!")
      .setDescription('Congrats! you made it into the guild! We hope you enjoy your stay!')
    message.channel.send(embed1)
        } else {
          const embed2 = new MessageEmbed()
            .setColor(0xFF0000)
            .setTitle("Oh no...")
            .setDescription("We are sorry " + ign + ". you do not meet the requirements to join the guild. Grind a bit more then try again")
          message.channel.send(embed2)
     }
   }else{
     reason = json_obj.cause
     const embed = new MessageEmbed()
      .setColor(0xFF0000)
	  .setTitle("An error has occured")
	  .setDescription('Reason = '+reason )
    message.channel.send(embed)
   }

  }
})
//PREFIX CUSTOMISATION!!!!
client.on("message", (message) => {
  if(message.content.startsWith(prefix+"prefix")){
    if(message.content.startsWith(command)){
     newPrefix = message.content.slice(prefix.length+command.length).trim().split(/ +/g)
     const embed = new MessageEmbed()
      .setTitle("Confirm")
      .setColor(0xFF0000)
      .setDescription("Are you sure you want to change the Prefix to ***"+newPrefix+"***? Reply with ***YES*** to confirm.")
      message.channel.send(embed)
     value = 93
    }else{
      const embed= new MessageEmbed()
      .setTitle("Current prefix")
      .setColor(0x5BD2F7)
      .setDescription("The current prefix is ***"+prefix+"***")
      message.channel.send(embed)
    }
  }else
  if(message.content.startsWith(oldPrefix)){
    const embed = new MessageEmbed()
    .setTitle("Error")
    .setColor(0xFF0000)
    .setDescription("The prefix is no longer ***"+oldPrefix+"***. It was changed to ***"+prefix+"***")
    message.channel.send(embed)
  }else{
  if (message.content === "YES"){
    if (value === 93/*setprefix*/){
      oldPrefix=prefix
      prefix = newPrefix
      db.set("prefix", prefix)
      value = 0
      const embed = new MessageEmbed()
      .setTitle("Confirmed")
      .setColor(0x00FF00)
      .setDescription("The Prefix is now ***"+prefix+ "***.")
      message.channel.send(embed)
    }   
  }
  }
})
//STATS!!!
client.on("message", (message) =>{
  if(message.content.startsWith(command3)){
    success = false
    const messageArray = message.content.split(" ") 
    ign = messageArray.slice(2)
    
    var json_obj = JSON.parse(Get("https://api.hypixel.net/player?key="+myKey+"&name="+ign))

   oldIgn = ign
  console.log(json_obj.success)
   if(json_obj.success === false){
     var cause = json_obj.cause
     const embed= new MessageEmbed()
     .setTitle("Error")
     .setColor(0xff0000)
     .setDescription("Reason = "+cause)
     message.channel.send(embed)
    }
   if(json_obj.success === true){
     success = true
     if (json_obj.player != null){
        var bedwarsLevel = json_obj.player.achievements.bedwars_level
        bedwarsLevel = makeUndefined0(bedwarsLevel)
        var bedwarsKills = json_obj.player.stats.Bedwars.kills_bedwars
        bedwarsKills = makeUndefined0(bedwarsKills)
        var bedwarsWins = json_obj.player.stats.Bedwars.wins_bedwars
        bedwarsWins = makeUndefined0(bedwarsWins)
        var bedwarsLosses = json_obj.player.stats.Bedwars.losses_bedwars
        bedwarsLosses = makeUndefined0(bedwarsLosses)
        var bedwarsFinalKills = json_obj.player.stats.Bedwars.final_kills_bedwars
        bedwarsFinalKills = makeUndefined0(bedwarsFinalKills)
        var bedwarsDeaths = json_obj.player.stats.Bedwars.deaths_bedwars
        bedwarsDeaths = makeUndefined0(bedwarsDeaths)
        var bedwarsFinalDeaths = json_obj.player.stats.Bedwars.final_deaths_bedwars
        bedwarsFinalDeaths = makeUndefined0(bedwarsFinalDeaths)
        var bedwarsWinstreak = json_obj.player.stats.Bedwars.winstreak
        bedwarsWinstreak = makeUndefined0(bedwarsWinstreak)
        var bedwarsBedsBroken = json_obj.player.stats.Bedwars.beds_broken_bedwars
        bedwarsBedsBroken = makeUndefined0(bedwarsBedsBroken)
        var bedwarsBedsLost = json_obj.player.stats.Bedwars.beds_lost_bedwars
        bedwarsBedsLost = makeUndefined0(bedwarsBedsLost)
        var bedwarsGamesPlayed = json_obj.player.stats.Bedwars.games_played_bedwars_1
        bedwarsGamesPlayed = makeUndefined0(bedwarsGamesPlayed)
        var skywarsLevel = json_obj.player.achievements.skywars_you_re_a_star
        skywarsLevel = makeUndefined0(skywarsLevel)
        var skywarsKills = json_obj.player.stats.SkyWars.kills
        skywarsKills = makeUndefined0(skywarsKills)
        var skywarsDeaths = json_obj.player.stats.SkyWars.deaths
        skywarsDeaths = makeUndefined0(skywarsDeaths)
        var skywarsGamesPlayed = json_obj.player.stats.SkyWars.games_played_skywars
        skywarsGamesPlayed = makeUndefined0(skywarsGamesPlayed)
        var skywarsGamesWon = json_obj.player.stats.SkyWars.wins
        skywarsGamesWon = makeUndefined0(skywarsGamesWon)
        var skywarsGamesLost = json_obj.player.stats.SkyWars.losses
        skywarsGamesLost = makeUndefined0(skywarsGamesLost)
        var skywarsSouls = json_obj.player.stats.SkyWars.souls
        skywarsSouls = makeUndefined0(skywarsSouls)
        var skywarsHeads = json_obj.player.stats.SkyWars.heads
        skywarsHeads = makeUndefined0(skywarsHeads)
        var skywarsWinstreak = json_obj.player.stats.SkyWars.win_streak
        skywarsWinstreak = makeUndefined0(skywarsWinstreak)
        var skywarsArrowsHit = json_obj.player.stats.SkyWars.arrows_hit
        skywarsArrowsHit = makeUndefined0(skywarsArrowsHit)
        var skywarsArrowsShot = json_obj.player.stats.SkyWars.arrows_shot
        skywarsArrowsShot = makeUndefined0(skywarsArrowsShot)
        var duelTotalWins = json_obj.player.stats.Duels.wins
        duelTotalWins = makeUndefined0(duelTotalWins)
        var duelTotalLosses = json_obj.player.stats.Duels.losses
        duelTotalLosses = makeUndefined0(duelTotalLosses)
        var duelTotalKills = json_obj.player.stats.Duels.kills
        duelTotalKills = makeUndefined0(duelTotalKills)
        var duelTotalDeaths = json_obj.player.stats.Duels.deaths
        duelTotalDeaths = makeUndefined0(duelTotalDeaths)
        var duelCoins = json_obj.player.stats.Duels.coins
        duelCoins = makeUndefined0(duelCoins)
        var duelWinsMGW = json_obj.player.stats.Duels.mw_duel_wins
        duelWinsMGW = makeUndefined0(duelWinsMGW)
        var duelWinsBow = json_obj.player.stats.Duels.bow_duel_wins
        duelWinsBow = makeUndefined0(duelWinsBow)
        var duelWinsClassic = json_obj.player.stats.Duels.classic_duel_wins
        duelWinsClassic = makeUndefined0(duelWinsClassic)
        var duelWinsNDB = json_obj.player.stats.Duels.potion_duel_wins
        duelWinsNDB = makeUndefined0(duelWinsNDB)
        var duelWinsCombo = json_obj.player.stats.Duels.combo_duel_wins
        duelWinsCombo = makeUndefined0(duelWinsCombo)
        var duelWinsSw = json_obj.player.stats.Duels.sw_duel_wins
        duelWinsSw = makeUndefined0(duelWinsSw)
        var duelWinsSw2v2 = json_obj.player.stats.Duels.sw_doubles_wins
        duelWinsSw2v2 = makeUndefined0(duelWinsSw2v2)
        var duelWinsSumo = json_obj.player.stats.Duels.sumo_duel_wins
        duelWinsSumo = makeUndefined0(duelWinsSumo)
        var duelWinsBlitz = json_obj.player.stats.Duels.blitz_duel_wins
        duelWinsBlitz = makeUndefined0(duelWinsBlitz)
        var duelWinsTNTBS = json_obj.player.stats.Duels.bowspleef_duel_wins
        duelWinsTNTBS = makeUndefined0(duelWinsTNTBS)
        var duelWinsBridge1v1 = json_obj.player.stats.Duels.bridge_duel_wins
        duelWinsBridge1v1 = makeUndefined0(duelWinsBridge1v1)
        var duelWinsBridge2v2 = json_obj.player.stats.Duels.bridge_doubles_wins
        duelWinsBridge2v2 = makeUndefined0(duelWinsBridge2v2)
        var duelWinsBridgeFours = json_obj.player.stats.Duels.bridge_four_wins
        duelWinsBridgeFours = makeUndefined0(duelWinsBridgeFours)
        var duelWinsBridge3v3v3v3 = json_obj.player.stats.Duels.bridge_3v3v3v3_wins
        duelWinsBridge3v3v3v3 = makeUndefined0(duelWinsBridge3v3v3v3)
        var duellossesMGW = json_obj.player.stats.Duels.mw_duel_losses
        duellossesMGW = makeUndefined0(duellossesMGW)
        var duellossesBow = json_obj.player.stats.Duels.bow_duel_losses
        duellossesBow = makeUndefined0(duellossesBow)
        var duellossesClassic = json_obj.player.stats.Duels.classic_duel_losses
        duellossesClassic = makeUndefined0(duellossesClassic)
        var duellossesNDB = json_obj.player.stats.Duels.potion_duel_losses
        duellossesNDB = makeUndefined0(duellossesNDB)
        var duellossesCombo = json_obj.player.stats.Duels.combo_duel_losses
        duellossesCombo = makeUndefined0(duellossesCombo)
        var duellossesSw = json_obj.player.stats.Duels.sw_duel_losses
        duellossesSw = makeUndefined0(duellossesSw)
        var duellossesSw2v2 = json_obj.player.stats.Duels.sw_doubles_losses
        duellossesSw2v2 = makeUndefined0(duellossesSw2v2)
        var duellossesSumo = json_obj.player.stats.Duels.sumo_duel_losses
        duellossesSumo = makeUndefined0(duellossesSumo)
        var duellossesBlitz = json_obj.player.stats.Duels.blitz_duel_losses
        duellossesBlitz = makeUndefined0(duellossesBlitz)
        var duellossesTNTBS = json_obj.player.stats.Duels.bowspleef_duel_losses
        duellossesTNTBS = makeUndefined0(duellossesTNTBS)
        var duellossesBridge1v1 = json_obj.player.stats.Duels.bridge_duel_losses
        duellossesBridge1v1 = makeUndefined0(duellossesBridge1v1)
        var duellossesBridge2v2 = json_obj.player.stats.Duels.bridge_doubles_losses
        duellossesBridge2v2 = makeUndefined0(duellossesBridge2v2)
        var duellossesBridgeFours = json_obj.player.stats.Duels.bridge_four_losses
        duellossesBridgeFours = makeUndefined0(duellossesBridgeFours)
        var duellossesBridge3v3v3v3 = json_obj.player.stats.Duels.bridge_3v3v3v3_losses
        duellossesBridge3v3v3v3 = makeUndefined0(duellossesBridge3v3v3v3)
        var duelsTotalBridgeWins = duelWinsBridge1v1 + duelWinsBridge3v3v3v3 + duelWinsBridgeFours + duelWinsBridge2v2 
        var duelsTotalBridgelosses = duellossesBridge1v1 + duellossesBridge3v3v3v3 + duellossesBridgeFours + duellossesBridge2v2 
        var bedwarsKDR = bedwarsKills/bedwarsDeaths
        bedwarsKDR = makeNaN0(bedwarsKDR)
        var duelTotalKDR = duelTotalKills/duelTotalDeaths
        duelTotalKDR = makeNaN0(duelTotalKDR)
        var duelTotalWLR = duelTotalWins/duelTotalLosses
        duelTotalWLR = makeNaN0(duelTotalWLR)
        var bedwarsFKDR = bedwarsFinalKills/bedwarsFinalDeaths
        bedwarsFKDR = makeNaN0(bedwarsFKDR)
        var bedwarsWLR = bedwarsWins/bedwarsLosses
        bedwarsWLR = makeNaN0(bedwarsWLR)
        var bedwarsBBBL = bedwarsBedsBroken/bedwarsBedsLost 
        bedwarsBBBL = makeNaN0(bedwarsBBBL)
        var skywarsKDR = skywarsKills/skywarsDeaths
        skywarsKDR = makeNaN0(skywarsKDR)
        var skywarsWLR = skywarsGamesWon/skywarsGamesLost
        skywarsWLR = makeNaN0(skywarsWLR)
        var skywarsASHR = skywarsArrowsHit/skywarsArrowsShot
        skywarsASHR = makeNaN0(skywarsASHR)
        var duelTotalSwWins = duelWinsSw + duelWinsSw2v2
        var duelTotalSwLosses = duellossesSw + duellossesSw2v2
        var duelWLRBridge = duelsTotalBridgeWins/duelsTotalBridgelosses
        duelWLRBridge = makeNaN0(duelWLRBridge)
        var duelWLRBow = duelWinsBow/duellossesBow
        duelWLRBow = makeNaN0(duelWLRBow)
        var duelWLRClassic = duelWinsClassic/duellossesClassic
        duelWLRClassic = makeNaN0(duelWLRClassic)
        var duelWLRNDB = duelWinsNDB/duellossesNDB
        duelWLRNDB = makeNaN0(duelWLRNDB)
        var duelWLRCombo = duelWinsCombo/duellossesCombo
        duelWLRCombo = makeNaN0(duelWLRCombo)
        var duelWLRSw = duelTotalSwWins/duelTotalSwLosses
        duelWLRSw = makeNaN0(duelWLRSw)
        var duelWLRSumo = duelWinsSumo/duellossesSumo
        duelWLRSumo = makeNaN0(duelWLRSumo)
        var duelWLRBlitz = duelWinsBlitz/duellossesBlitz
        duelWLRBlitz = makeNaN0(duelWLRBlitz)
        var duelWLRTNTBS = duelWinsTNTBS/duellossesTNTBS
        duelWLRTNTBS = makeNaN0(duelWLRTNTBS)
        bedwarsKDR = roundDecimal2(bedwarsKDR)
        bedwarsFKDR = roundDecimal2(bedwarsFKDR)
        bedwarsWLR = roundDecimal2(bedwarsWLR)
        bedwarsBBBL = roundDecimal2(bedwarsBBBL)
        skywarsKDR = roundDecimal2(skywarsKDR)
        skywarsASHR = roundDecimal2(skywarsASHR)
        skywarsWLR = roundDecimal2(skywarsWLR)
        duelTotalWLR = roundDecimal2(duelTotalWLR)
        duelTotalKDR = roundDecimal2(duelTotalKDR) 
        duelWLRBridge = roundDecimal2(duelWLRBridge)
        duelWLRBow = roundDecimal2(duelWLRBow)
        duelWLRClassic = roundDecimal2(duelWLRClassic)
        duelWLRNDB = roundDecimal2(duelWLRNDB)
        duelWLRCombo = roundDecimal2(duelWLRCombo)
        duelWLRSw = roundDecimal2(duelWLRSw)
        duelWLRSumo = roundDecimal2(duelWLRSumo)
        duelWLRBlitz = roundDecimal2(duelWLRBlitz)
        duelWLRTNTBS = roundDecimal2(duelWLRTNTBS)



        if(message.content.startsWith(command3+" duels")){
          const embed = new MessageEmbed()
          .setTitle(ign+"'s Duels stats page 1")
          .setDescription("Here is the first page of "+ign+"'s Duels stats ")
          .setColor(0x07D7FE)
          .addFields(
          { name: 'Wins', value: duelTotalWins, inline: true },
          { name: 'Losses', value: duelTotalLosses, inline: true },
          { name: 'Win / Loss Ratio', value: duelTotalWLR, inline: true },
          { name: 'Kills', value: duelTotalKills, inline: true },
          { name: 'Deaths', value: duelTotalDeaths, inline: true },
          { name: 'Kills / Deaths Ratio', value: duelTotalKDR , inline: true },
          { name: 'Bridge Wins', value: duelsTotalBridgeWins, inline: true },
          { name: 'Bridge Losses', value: duelsTotalBridgelosses, inline: true },
          { name: 'Bridge Win/Loss Ratio', value: duelWLRBridge, inline: true },
          { name: 'Bow Duel Wins', value: duelWinsBow , inline: true },
          { name: 'Bow Duel Losses', value: duellossesBow, inline: true },
          { name: 'Bow Duel Win/Loss Ratio ', value: duelWLRBow, inline: true },
          { name: 'Classic Duel Wins', value: duelWinsClassic , inline: true },
          { name: 'Classic Duel Losess', value: duellossesClassic , inline: true },
          { name: 'Classic Duel Win/Loss Ratio', value: duelWLRClassic, inline: true },
          { name: 'No Debuf Duel Win', value: duelWinsNDB , inline: true },
          { name: 'No Debuf Duel Losses', value: duellossesNDB , inline: true },
          { name: 'No Debuf Duel Win/Loss Ratio', value: duelWLRNDB, inline: true },
          )
          message.channel.send(embed)
        const embed1 = new MessageEmbed()
          .setTitle(ign+"'s Duels stats page 2")
          .setDescription("Here is the second page of  "+ign+"'s Duels stats ")
          .setColor(0x07D7FE)
          .addFields(
          { name: 'Combo Duel Wins', value: duelWinsCombo , inline: true },
          { name: 'Combo Duel Losses', value: duellossesCombo , inline: true },
          { name: 'Combo Duel Win/Loss Ratio', value: duelWLRCombo, inline: true },
          { name: 'Skywars Duel Wins', value: duelTotalSwWins, inline: true },
          { name: 'Skywars Duel Losses', value: duelTotalSwLosses , inline: true },
          { name: 'Skywars Duel Win/Loss Ratio', value: duelWLRSw, inline: true },
          { name: 'Sumo Duel Wins' , value: duelWinsSumo , inline: true },
          { name: 'Sumo Duel Losses', value: duellossesSumo , inline: true },
          { name: 'Sumo Duel Win/Loss Ratio', value: duelWLRSumo, inline: true },
          { name: 'Blitz Duel Wins', value: duelWinsBlitz , inline: true },
          { name: 'Blitz Duel Losses', value: duellossesBlitz , inline: true },
          { name: 'Blitz Duel Win/Loss Ratio', value: duelWLRBlitz, inline: true },
          { name: 'Tnt Bowspleef Wins', value: duelWinsTNTBS , inline: true },
          { name: 'Tnt Bowspleef Losses', value: duellossesTNTBS , inline: true },
          { name: 'Tnt Bowspleef Win/Loss Ratio', value: duelWLRTNTBS, inline: true },
          )
          message.channel.send(embed1)
        }


        if (message.content.startsWith(command3+" sw")){
          const embed = new MessageEmbed()
          .setTitle(ign+"'s Skywars stats")
          .setDescription("Here are "+ign+"'s Skywars stats")
          .setColor(0x07D7FE)
          .addFields(
          { name: 'Level', value: skywarsLevel, inline: true },
          { name: 'Games played', value: skywarsGamesPlayed, inline: true },
          { name: 'Winstreak', value: skywarsWinstreak, inline: true },
          { name: 'Wins', value: skywarsGamesWon, inline: true },
          { name: 'Losses', value: skywarsGamesLost, inline: true },
          { name: 'Wins / Loss Ratio', value: skywarsWLR, inline: true },
          { name: 'Kills', value: skywarsKills, inline: true },
          { name: 'Deaths', value: skywarsDeaths, inline: true },
          { name: 'Kills / Deaths Ratio', value: skywarsKDR, inline: true },
          { name: 'Arrows hit', value: skywarsArrowsHit, inline: true },
          { name: 'Arrows shot', value: skywarsArrowsShot, inline: true },
          { name: 'Arrows hit / Arrows shot ratio', value: skywarsASHR, inline: true },
          { name: 'Souls', value: skywarsSouls, inline: true },
          { name: 'Heads', value: skywarsHeads, inline: true },
  	     )
         message.channel.send(embed)

         }
        if (message.content.startsWith(command3+" bw")){
          const embed = new MessageEmbed()
          .setTitle(ign+"'s Bedwars stats")
          .setDescription("Here are "+ign+"'s Bedwars stats")
          .setColor(0x07D7FE)
          .addFields(
          { name: 'Level', value: bedwarsLevel, inline: true },
          { name: 'Games played', value: bedwarsGamesPlayed, inline: true },
          { name: 'Winstreak', value: bedwarsWinstreak, inline: true },
          { name: 'Wins', value: bedwarsWins, inline: true },
          { name: 'Losses', value: bedwarsLosses, inline: true },
          { name: 'Wins / Loss Ratio', value: bedwarsWLR, inline: true },
          { name: 'Kills', value: bedwarsKills, inline: true },
          { name: 'Deaths', value: bedwarsDeaths, inline: true },
          { name: 'Kills / Deaths Ratio', value: bedwarsKDR, inline: true },
          { name: 'Final kills', value: bedwarsFinalKills, inline: true },
          { name: 'Final deaths', value: bedwarsFinalDeaths, inline: true },
          { name: 'Final kills /Final deaths Ratio', value: bedwarsFKDR, inline: true },
          { name: 'Beds broken', value: bedwarsBedsBroken, inline: true },
          { name: 'Beds lost', value: bedwarsBedsLost, inline: true },
          { name: 'Beds broken/Beds lost Ratio', value: bedwarsBBBL, inline: true },
    	    )
          message.channel.send(embed)
        }
         }

      }
      if(json_obj.player === null){
      const embed= new MessageEmbed()
      .setTitle("Error")
      .setColor(0xff0000)
      .setDescription("The IGN `"+ign+"` is an invail user. Please make sure that you spelled the username correctly.")
      message.channel.send(embed)
    }

  }
   
 })














keepAlive()
client.login(myToken)
