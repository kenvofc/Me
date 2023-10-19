//base by DGXeon (Xeon Bot Inc.)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: kenvofc
//WhatsApp: +237656774511
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "237656774511"
global.ownername = "Kenv OFC"
global.ytname = "YT:"
global.socialm = "GitHub: kenvofc"
global.location = "Cameroon, Yaoundé, Douala"

global.ownernumber = '237656774512'  //creator number
global.ownername = 'Kenv OFC' //owner name
global.botname = 'KenvBotInc' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'Kenv ofc\n\nContact: +237656774511'

//console view/theme
global.themeemoji = '☣️'
global.wm = "Kenv Bot Inc."

//theme link
global.link = 'https://chat.whatsapp.com/Kjm8rnDFcpb04gQNSTbW2d'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v4'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
