const { models } = require("mongoose")

// This is refering to the models in the models folder 
// The controller is like a spokeman for the models (back-end- datatbase) 
const db = require("../models");

// defining methods for the post controller 
module.exports = {
  // findALL is just a Banana, db.find is a built in method 
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then(dbModel => res.json(dbModel))
      // this is to catch err
      .catch(err => res.status(422).json(err))
  },

  findByID: function (req, res) {
    db.Book.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // make a whole new body 
  create: function (req, res) {
    db.Book.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //  update on one that is already exist 
  update: function (req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(deModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
