const mongoose= require ('mongoose');
const Produit = require('../models/produit.model');
const RefCIE = mongoose.model(
    "RefCIE", new mongoose.Schema({
      name : String,
      Produit : {
          type : mongoose.Schema.Types.ObjectId,
          ref :'Produit'
      }
    
    
    })
  );
  module.exports = RefCIE;

module.exports={
   RefCIE
}