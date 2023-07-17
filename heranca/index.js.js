class Property{
  constructor(area, price){
    this.area= area;
    this.price = price
  }

  getPricePerSquareMeter(){
    return this.price / this.area
  }
}

class House extends Property{
  


}

const land = new Property(200, 50000);

const house = new House(120, 200000) 

console.log(land)
console.log(house.getPricePerSquareMeter())