class Wallet {
  #amount;
  #username;
  constructor() {
    this.#amount = 100.99 * 100;
  }

  get amount() {
    return this.#amount / 100;
  }

  set amount(addAmount) {
    this.amount += addAmount;
  }

  get username() {
    return this.#username;
  }
  set username(newUserName) {
    if (typeof newUserName === "string") {
      this.#username = newUserName;
    } else {
      console.log("Username type must be a string");
    }
  }
}

const myWallet = new Wallet();

console.log(myWallet.amount);

myWallet.username = "Matheus Cirino";

console.log(myWallet.username);
