const TG = require('telegram-bot-api')
require('dotenv').config()

const jurema = new TG({
    token: process.env.BOT_TOKEN
})

const mp = new TG.GetUpdateMessageProvider()
jurema.setMessageProvider(mp)
jurema.start()
.then(() => {
    console.log('Jurema está online!')
})
.catch(console.err)

const CHATS = [
    {
        name: 'Isaac',
        id: '810580122'
    },
]

function notifyAll() {
    CHATS.forEach(chat => {
        jurema.sendMessage({
            chat_id: chat.id,
            text: chat.name + ', a caixa encheu!'
        })
    })
}

module.exports = { notifyAll }