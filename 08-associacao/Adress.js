class Adress{
  
  constructor(street, number, neighborhood, city, state){
    this.stret =street;
    this.number = number ;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;

  }
  fullAddress(){
    return `Rua ${this.stret}, n° ${this.number}, ${this.neighborhood}. ${this.city}/${this.state}`
  }


}
module.exports = Adress