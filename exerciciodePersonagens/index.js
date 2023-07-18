const Character = require('./Character.js')
const Warrior = require('./Warrior.js');
const Mage = require('./Mage.js');
const Thief = require('./Thief.js')

const arthur = new Mage('Arthur', 90,4,  2, 14)
const beatrice = new Thief('Beatrice',70, 4, 1)
const cain = new Warrior('Cain', 100, 5, 3, 3)


console.table({arthur, beatrice, cain})


cain.attack(beatrice)

console.table({arthur, beatrice, cain})
arthur.heal(beatrice)

console.table({arthur, beatrice, cain})

beatrice.attack(cain)
console.table({arthur, beatrice, cain})

