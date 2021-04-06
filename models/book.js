const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Everything in Mongoose starts with a Schema 

const googlebook = new Schema({
  title: { type: String, required: true },
  author: { type: String },
  synopsis: { type: String },
  image: { type: String },
  link: { type: String }
});


// To use our schema definition, we need to convert our blogSchema into a Model we can work with. 
// To do so, we pass it into mongoose.model(modelName, schema)

const Book = mongoose.model("Book", googlebook);
module.exports = Book;