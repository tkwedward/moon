class Character{
    constructor(character){
        this.name = character.name
        this.total_hp = character.hp
        this.hp = character.hp
        this.mp = character.mp
        this.number_of_card_drew = 3
        this.cardBank = character.cardBank
        this.blessing = character.blessing

    }

    drawCard(number){
        let cardFromDeck = []
        for (let i=0; i < number; i++){
            cardFromDeck.push(this.Deck.pop())
        }
        return cardFromDeck
        // return this.cardBank.pop()
    }

    Attack() {
       throw new Error('You have to implement the method doSomething!');
    }
}
// console.log(redHat.drawCard());

class HumanPlayer extends Character{
    constructor(character){
        super(character)
        this.type = "Human"
    }
}

class AIPlayer extends Character{
    constructor(character){
        super(character)
        this.type = "AI"
    }
}

try {
    exports.AIPlayer = AIPlayer
    exports.HumanPlayer = HumanPlayer
} catch (e) {}
