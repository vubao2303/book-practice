const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes 
// cái này sẽ thành /api/ bấy cứ cái gì o trong cái folder api 
// cứ thích bày ra một bước vậy 
// nhưng nếu có 1 cái route khac cần giống đít nhưng khác đầu thì có thể vô đây change it 
router.use("/api", apiRoutes);

// if no API routes are hit, send the react app 
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;