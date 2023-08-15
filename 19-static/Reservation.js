class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee;
  }

  static get PremiumFee() {
    return Reservation.baseFee * 1.5;
  }
  static baseFee = 150;
  static showBaseFee() {
    console.log(`BaseFee is: ${Reservation.baseFee}`);
  }
}

const r1 = new Reservation(3, 201, 5);
console.log(r1);

const r2 = new Reservation(2, 104, 8);
console.log(r2);

Reservation.showBaseFee();
Reservation.baseFee = 200;

console.log("Premium Fee is: ", Reservation.PremiumFee);
