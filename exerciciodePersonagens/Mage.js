const Character = require('./Character')


 class Mage extends Character{
  constructor(name, life, attackPts, defensePts, magic){
    super(name, life, attackPts, defensePts);

    this.magic = magic;
  }

  attack(target){
     target.life -= ((this.attackPts + this.magic) - target.defensePts)
  }

  heal(target){
     target.life += ( 2 * this.magic)
  }

}
module.exports = Mage