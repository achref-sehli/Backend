const express =require ("express") ;
const body_parser = require ("body-parser");
const {mongoose}= require ('./connect/db');
const cors = require('cors');

const userApi = require('./routes/user');
const familleApi = require('./routes/famille');
const produitApi = require('./routes/produit');


const app = express();
app.use(body_parser.json());
app.use(cors());


app.use('/user' , userApi);
app.use('/famille' , familleApi);
app.use('/produit' , produitApi);
app.listen(3000 , ()=>{
    console.log("success");
})
