let CardData = [
    {
      "name":"Attack",
      "id": 1,
      "cost": [0, 0],
      "description": "Deal 3 damage",
      "effect": {
          "SelfDamage": 1,
          "Attack": [10, "normal"]
      }
    },
    {
      "name":"Crash",
      "id": 2,
      "cost": [0, 0],
      "description": "Deal 3 damage",
      "effect": {
          "SelfDamage": 1,
          "Attack": [10, "normal"]
      }
    }

]

try{
    exports.CardData = CardData
} catch(e){}
