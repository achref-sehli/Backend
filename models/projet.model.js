const mongoose= require ('mongoose');

const Projet = mongoose.model(
    "Projet", new mongoose.Schema({
      name : String,
      
    })
  );
  module.exports = Projet;

module.exports={
    Projet
}