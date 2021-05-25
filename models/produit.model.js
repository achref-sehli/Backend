const mongoose= require ('mongoose');
const Famille = require ('../models/famille.model');
const Produit= mongoose.model(
    "Produit", new mongoose.Schema({
      name : String,
      famille :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Famille'
      }
    })
  );
  module.exports = Produit;

module.exports={
    Produit
}