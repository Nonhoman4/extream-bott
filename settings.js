
global.nomerOwner ="6281238772258"
global.nomerOwner2 = "62813390135874"
global.ownerName = "Rusdi"
global.botName = "EXTREAM" 
global.sessionName ="session"
global.setmenu ="location"
global.docType = "docx"
global.Qoted = "ftoko"
global.Instagram ="https://www.instagram.com/officialdittaz/"
global.multi = true
global.nopref = false
global.allpref = false
global.prefa = "."
global.fake = botName
global.publik = true
global.Console = false
global.autorespon = false
global.copyright = "© EXTREAM" 
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="EXTREAM"
global.packName = "EXTREAM"
global.authorName = "Crew"
global.replyType = "web2"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = false
global.autoLevel = false
global.autoSticker = false
global.gamewaktu = 60
global.limitCount = 30
global.gcount = {
prem : 60,
user : 20
} 





const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






