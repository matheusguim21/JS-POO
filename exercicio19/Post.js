const Comment = require('./Comment')
const Author = require('./Author')

class Post{
  constructor(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author
    this.comments = [];
    this.createdAt = new Date()
  }
  
  addComment(author, text){
    this.comments.push(new Comment(author, text))
  }
  }


module.exports = Post