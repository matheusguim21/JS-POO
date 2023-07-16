const Author = require('./Author')


const matheus = new Author('Matheus')

 const newPost = matheus.createPost('Jesus é bom', 'Veja como Jesus é bom em toda sua vida', matheus);
 newPost.addComment(matheus, 'Primeiro comentário');
 newPost.addComment('Sarah', 'Não achei nada demais')
 
 console.log(matheus.posts)
 console.log(newPost.comments);