let novoUsuario = {};
let novoProduto = {};

class User{
  constructor(fullname, email, password){
    this.fullname = fullname;
    this.email = email
    this.password = password;
  }

  login(email, password){
    if(email == this.email && password == this.password ){
      return 'Usuário autenticado'
    }else{
      return 'Dados de acesso incorretos'
    }
  }
}


class Product{
  constructor(name,description, price){
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(addqtd){
    this.inStock += addqtd;
    
  }
  calculateDiscount(porcentagem){
    
    const discountPrice = this.price - this.price *(porcentagem/100)

    console.log("Preço com desconto: " , discountPrice )

  }


}

document.querySelector('.creationForm').addEventListener('submit', (evento)=>{
  evento.preventDefault()

  const fullname = document.getElementById('fullname').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  novoUsuario = new User(fullname, email, password);
  console.log(novoUsuario)
})

document.querySelector('.autenticationForm').addEventListener('submit',(evento)=>{
  evento.preventDefault()

  const email = document.getElementById('emailLogin').value
  const password = document.getElementById('passwordLogin').value

  const autenticado = novoUsuario.login(email,password)
  console.log(autenticado)
})

document.querySelector('.createProduct').addEventListener('submit', (evento)=>{
  evento.preventDefault()
  const productName = document.getElementById('nameProduct').value;
  const description = document.getElementById('description').value
  const price = parseInt(document.getElementById('price').value)

  novoProduto = new Product(productName,description, price)
  console.log(novoProduto)
})

document.querySelector('.desconto').addEventListener('submit', (evento)=>{
  evento.preventDefault()
  novoProduto.addToStock(document.getElementById('add').value);
  console.log("Quantidade no estoque: ", novoProduto.inStock)
  novoProduto.calculateDiscount(document.getElementById('discount').value)
})
