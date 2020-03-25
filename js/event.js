class Event{
    constructor(attacker, defender){
        this.attacker = attacker
        this.defender = defender
    }

    effect(){

    }
}


class Attack extends Event{
    constructor(attacker, defender, damage, type){
        super(attacker, defender)
        this.name = "Attack"
        this.damage = damage
        this.type = type
    }

    effect(){
        this.defender.hp -= this.damage
    }
}



class SelfDamage extends Event{
    constructor(damage){
        super()
        this.name = "SelfDamage"
        this.damage = damage
    }

    effect(target){
        target.hp -= this.damage
    }
}

try{
    exports.Attack = Attack
    exports.SelfDamage = SelfDamage
} catch(e){

}
