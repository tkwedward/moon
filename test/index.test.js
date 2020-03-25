const Battle = require("../js/battle.js").Battle
const HumanPlayer  = require("../js/characters").HumanPlayer
const AIPlayer  = require("../js/characters").AIPlayer
// import Character from "../js/characters.js"
const card = require("../js/card.js")
const data = require("../data/data.json")
const CardData = require("../data/cardData.js")
// const character = require("../js/character.js")


let redHat = new HumanPlayer(data["allCharacters"][0])
let enemy = new AIPlayer(data["allCharacters"][1])


function createBattle(){
    let battle = new Battle(redHat, enemy)
    let player1 = battle.players[0]
    let player2 = battle.players[1]
    battle.initializeBattle()
    battle.turnStart(player1)
    return battle
}

describe("my test suite", () =>{
    it ("Red Hat is created", ()=>{
        expect(redHat.name).toEqual("Red Hat")
    })

    it ("AI is AI, Human is Human", () => {
        expect(redHat.type).toEqual("Human")
        expect(enemy.type).toEqual("AI")
    })

    it ("Red Hat cardBank is correct", ()=>{
        expect(redHat.cardBank).toEqual(["Attack", "Attack", "Attack"])
    })

    it("initialize Battle correctly", ()=>{
        // test if the card is drew as expected
        let battle = createBattle()

        let hand = battle.players[0].hand
        let cardsName = hand.map(p=>p.name)

        expect(cardsName).toEqual(["Attack", "Attack", "Attack"])
        // expect(player1.Deck).toEqual([])
    })


    it ("redHat can attack and cards can effect", () => {
        let battle = createBattle()
    })

})
