const Character = require('./Character')


class Thief extends Character{
  
  attack(target){
      target.life -= 2 * (this.attackPts - target.defensePts)
  }
}

module.exports = Thief