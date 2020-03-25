try{
    Card = require("../js/card.js").Card
    Attack = require("./event.js")
    SelfDamage = require("./event.js")
    CardData = require("../data/cardData.js")["CardData"]
} catch(e){}


function createDeck(player){
    let deck = []

    player.cardBank.forEach(_c=>{
        CardData.forEach(_cardInfo=>{
            if (_c == _cardInfo.name){
                let card = new Card(_cardInfo)
                deck.push(card)
            }
        })
    })// player.cardBank.forEach

    return deck
}

function checkRequirement(){
    return true

}

function produceCardEffect(key, value){
    let _event
    switch (key){

        case "Attack":
            _event = new Attack(value)
            return _event

        case "SelfDamage":
            _event = new SelfDamage(value)
            return _event

        default:
            console.log(key)
            return 0
    }

}


function cardEffect(_card){
    console.log(_card)

    if (checkRequirement()){
        let effectArray = []
        Object.entries(_card.effect).forEach(key => {
            let eventName = key[0]
            let value = key[1]
            effectArray.push(produceCardEffect(eventName, value))
        })// put thins in the effect Array
        return effectArray
    } else {
        console.log("cannot use this card")
    }
}

function renderCharactersInBattle(player){
    let playerSide;
    if (player.name == "Red Hat"){
        playerSide  = document.querySelector(".redHatSide>.status")
    } else {
        playerSide  = document.querySelector(".enemySide>.status")
        let enemyImage = document.querySelector(".enemyImage")
        enemyImage.src = `../images/${player.name}.png`

    }

    playerSide.querySelector(".name").innerHTML = player.name
    let hpLeft = playerSide.querySelector(".hpLeft")
    hpLeft.style.width = "100%"

    let hpValue = playerSide.querySelector(".hpValue")
    hpValue.innerHTML = player.hp

}

class Battle{
    constructor(redHat, enemy){
        this.players = [redHat, enemy]
    }

    initializeBattle(){
        // to initialize the battle and put the cards in correct positions
        this.players.forEach(p=>{
            p.Deck = createDeck(p)
            p.hand = []
            p.discardPile = []
        })
    }


    renderBattle(){
        // to display the characters and cards on the screen correctly
        renderCharactersInBattle(this.players[0])
        renderCharactersInBattle(this.players[1])

    }

    turnStart(player){
        // to start drawing cards
        let cardDrew = player.drawCard(player.number_of_card_drew)

        cardDrew.forEach(_c=>{
            player.hand.push(_c)
            try{
                this.createCard(player, _c)
            } catch(e){}
        })
    }

    createCard(player, card){
        // a helper function to create cards from the data in the database
        let _hand, _width
        if (player.name == "Red Hat"){
            _hand = document.querySelector(".redHatSide>.hand")
        } else {
            _hand = document.querySelector(".enemySide>.hand")
        }

        let _card = document.createElement("div")
        _width = 120
        _card.classList.add("card")
        _card.style.width = `${_width}px`
        _card.style.height = `${_width*1.5}px`

        let cardName = document.createElement("div")
        cardName.innerHTML = card.name

        let cardDescription = document.createElement("div")
        cardDescription.innerHTML = card.description

        _card.addEventListener("click", function(){
            console.log(cardDescription.innerHTML)
            // an array contains the effect of the cards
            let cardEffectArray = cardEffect(card)
            console.log(cardEffectArray)


        })

        _card.append(cardName, cardDescription)
        _hand.append(_card)
    }

    effectTakeAction(effect_Array){
        effect_Array.forEach(p=>{
            p.effect()
        })
    }



    damageCount(){

    }


    checkEnd(){

    }
}

try {
    exports.Battle = Battle
} catch (e) {}
