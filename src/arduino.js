/**
 * Para utilizar a função pull up do Arduino (resistor embutido), foi necessário instanciar um objeto Button do Johnny Five. Na live foi utilizado o evento "up" do Button, entretanto, esse evento só será invocado se ao passar corrente no pino (HIGH), o próximo estado do pino fosse LOW. Com o evento "down", assim que passar corrente no pino (HIGH), a função será invocada. Então, quando o estado do pino for LOW, a bot Jurema vai notificar à todos que a caixa encheu.
 * 
 * 
 * Obs: Foi necessário utilizar a função pull up para evitar oscilações no pino. Para sanar essa necessidade seria necessário adicionar um resitor no pino do fio e isso nos permitiria a criação de um objeto Pin no Johnny Five.
 */

const { Board, Button } = require('johnny-five')
const board = new Board()

const juremaBot = require('./juremaBot')

board.on('ready', () => {
    
    const fio = new Button({
        pin: 2,
        isPullup: true
    })

    fio.on("down", () => {
        juremaBot.notifyAll()
        console.log('Encheu a caixa!!')
    })
})