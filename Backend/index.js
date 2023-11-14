const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
const Book = require('./schema')

//app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/bookApp')
.then (() => { 
    console.log("Connected to mongo!")
})
.catch((err) => {
    console.log("Something went wrong",err)
})

app.get('/api/allbooks', async (req,res)=>{
    const allBooks = await Book.find({})
    res.json({allBooks})
});

app.get('/api/book/:id',async (req,res)=>{
    const {id} = req.params //id must be an object
    try {
        const bookData = await Book.findById(id);
        res.json({bookData});
    } catch(e) {
        console.log(e);
        //res.json({e})
    }
});

/* app.post('/api/search',async (req,res)=>{
    const {value} = req.body //id must be an object
    try {
        const bookData = await Book;
        res.json({bookData});
    } catch(e) {
        console.log(e);
        //res.json({e})
    }
}); */

app.listen(3000,()=>{
    console.log('listening on port 3000!')
})