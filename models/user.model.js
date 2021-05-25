const mongoose= require ('mongoose');

const User = mongoose.model(
    "User", new mongoose.Schema({
      name : String,
      lastname : String,
      email: String,
      password: String,
      phone : Number,
      role: String  ,
         })
  );
  module.exports = User;

module.exports={
    User
}