const Post = require('./Post')

class Author {
  constructor(name){
    this.name = name
    this.posts = [];
  };
  createPost(author, body){
    const newPost = new Post(author, body,this);
    this.posts.push(newPost);
    return newPost
  }
}

module.exports = Author