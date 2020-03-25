class Card{
    constructor(cardInfo){
        this.name = cardInfo.name
        this.type = cardInfo.type
        this.star = cardInfo.star
        this.image = cardInfo.image
        this.description = cardInfo.description
        this.cost = cardInfo.cost
        this.effect = cardInfo.effect
    }



        createEffect(){


        }// createEffect

}// Class




// 每損失多少點生命值，增加傷害

// type: extra damage, hp
try{
    exports.Card = Card
} catch(e){

}
