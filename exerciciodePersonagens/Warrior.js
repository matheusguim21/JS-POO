const Character = require('./Character')

class Warrior extends Character{
  constructor(name, life, attackPts, defensePts, shield){
    super(name, life, attackPts, defensePts);
    this.shield = shield;
    this.position = 'attacking'
  }
  attack(target){
    if(this.position === 'attacking'){
      super.attack(target)
    }
  }
  switchPosition(){
    if(this.position === 'attacking'){
      this.position = 'defending'
      this.defensePts += this.shield
    }
    else{
      this.position = 'attacking'
      this.defensePts -= this.shield
    }
  }

}

module.exports = Warrior