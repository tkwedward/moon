console.log("hie");

let redHat = new Character(data["allCharacters"][0])

let enemy = new Character(data["allCharacters"][1])


let battle = new Battle(redHat, enemy)
battle.initializeBattle()
battle.renderBattle()
battle.turnStart(battle.players[0])
