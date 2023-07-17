const Adress = require("./Adress");
const Person = require('./Person');


const address = new Adress('Almeida Oliveira', 130, 'Guaratiba', 'Rio de Janeiro', 'RJ');

const person = new Person('Matheus', address)

console.log(person.adress.fullAddress())