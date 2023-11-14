const mongoose = require('mongoose'); 

const bookSchema = new mongoose.Schema({ 
    title: {type:String, required:true},
    authorName: {type:String, required:true},
    authorSurname: {type:String, required:true},
    category: {type:String, required:true},
    coverImage: {type:String},
    price: {type:Number, min:[0,"price can not be negative"]},
    pages: {type:Number},
    publishYear: {type:Number}
})

bookSchema.virtual('authorFull').get(function (){ //Book.authorFull = 'surname, name'
    return `${this.authorSurname}, ${this.authorName}`
})

bookSchema.set('toJSON', {getters:true}); //set access for the virtual properties from client-side

const Book = mongoose.model('Book',bookSchema); // model name is 'Book'. collection will be named 'books'
module.exports = Book;