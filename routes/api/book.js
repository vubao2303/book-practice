const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const bookController = require("../../controllers/booksController");

// this route matches with "/api/books" 
// api ( this come from the big index) 
// books (come from the smaller index) 
router.route("/").get(bookController.findAll).post(bookController.create);

// Matches with "api/books/:id" 
router.route("/:id").get(booksController.findByID).delete(bookController.remove);

module.exports = router;

