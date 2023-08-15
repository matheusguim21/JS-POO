class Book {
  constructor(title, author){
    this.title = title;
    this.author = author;
    this.published = false
  }

  publish(){
    this.published = true
  }


}
 const eragon = new Book('Eragon', 'Um cara Aí' )
 const TheOne = new Book('A Escolha','Kiera Cass')
  TheOne.publish()
 console.log(eragon);
 console.log(TheOne);