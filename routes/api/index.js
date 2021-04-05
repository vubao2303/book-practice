const router = require("express").Router();
const bookRoutes = require("./book");

// Book routes 
router.use("/books", bookRoutes);

module.exports = router;

// hm... i am not sure what this is for, I don't think I need to use it 
// but I am just gonna keep it here for now, and will delete it later 