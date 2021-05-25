const mongoose= require ('mongoose');
const User = require('../user.model');
const RefCIE = require ('../refCIE.model') ; 



const CassetteMachineDegrappage = mongoose.model(
    "CassetteMachineDegrappage", new mongoose.Schema({
      name : String,
    elaborépar : {
          type : mongoose.Schema.Types.ObjectId,
          ref :'User'
      }, 
      RefCIE : {
        type : mongoose.Schema.Types.ObjectId,
        ref :'RefCIE'
    }
    
    
    })
  );
  module.exports = CassetteMachineDegrappage;

module.exports={
    CassetteMachineDegrappage

}