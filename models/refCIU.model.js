const mongoose= require ('mongoose');
const Produit = require('../models/produit.model');
const RefCIE = require ('../models/refCIE.model') ; 



const RefCIU = mongoose.model(
    "RefCIE", new mongoose.Schema({
      name : String,
      Produit : {
          type : mongoose.Schema.Types.ObjectId,
          ref :'Produit'
      }, 
      RefCIE : {
        type : mongoose.Schema.Types.ObjectId,
        ref :'RefCIE'
    }
    
    
    })
  );
  module.exports = RefCIU;

module.exports={
   RefCIU

}