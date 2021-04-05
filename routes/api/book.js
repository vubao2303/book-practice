const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const bookController = require("../../controllers/booksController");

// this route matches with "/api/post" 
router.route("/").get(bookController.findAll).post(bookController.create);

// Matches with "api/post/:id" 
router.route("/:id").get(booksController.findByID).delete(bookController.remove);

module.exports = router;

// needHelp
