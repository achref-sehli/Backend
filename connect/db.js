const db = require('mongoose');


db.Promise=global.Promise;

db.connect('mongodb://127.0.0.1:27017/GestionDesProjets' , { useNewUrlParser: true , 
useUnifiedTopology: true ,
useFindAndModify : true , 
useCreateIndex : true
 }).then(

    (conn)=>{
        console.log('connecté à la base de données');
        initial();
    },(err)=>{
        console.log(err);
    }
);

module.exports={db};