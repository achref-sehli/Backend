const mongoose= require ('mongoose');
const Projet = require('../models/projet.model');
const Famille = mongoose.model(
    "Famille", new mongoose.Schema({
      name : String,
      projet : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Projet'
      }
      
    })
  );
  module.exports = Famille;

module.exports={
    Famille
}