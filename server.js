const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// define middleware here 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// serve up static assets (usually on heroku )
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Send every other request to the react app 
// define any API routes before this runs 

app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb:/localhost/googlebooks");
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})