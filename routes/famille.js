const express= require('express');

const {Famille} = require('../models/famille.model');

const router = express.Router();



// Lire toutes les familles
router.get("/getallfamilles" , (req,res)=>{
    Famille.find().then(
        (allfamilles)=>{
            console.log(allfamilles);
            res.send(allfamilles);
        },
        (err)=>{
            console.log(err);
        }
    )
})
//Ajouter une famille
router.post("/ajoutfamille",(req,res)=>{
    let a =req.body;
    famille= new Famille(a);
    famille.save().then(
      (a)=>{
          console.log(a);
          res.send(a);
      },
      (err)=>{
          console.log(err);
      } 
    );
    
    });
     //Lire une famille By ID
     router.get("/getfamillebyid/:id",(req,res)=>{
        let  id = req.params.id;
        Famille.findOne({_id:id}).then(
            (famille)=>{
                console.log(famille);
                res.send(famille);
            },
                 (err)=>{
                 console.log('erreur');
            }
     
        ) ;
     }
     );
     //supprimer une famille
     router.delete("/deletefamille/:id",(req,res)=>{
        id=req.params.id;
        Famille.findByIdAndDelete({
            _id:id
            
        }).then(
            (famille)=>{
                console.log(famille);
                res.send(famille);
            },
           (err)=> {
               console.log(err);
           }
        )
        });
    //Modifer une famille
    router.put('/updatefamille/:id' , (req , res)=>{
        id = req.params.id;
        fam = req.body;
        Famille.findByIdAndUpdate({_id : id},{
            name : fam.name,
            
        
        }).then(
            (fam)=>{
                res.send(fam)
        
            },
            (err)=>{
                console.log(err);
        
            }
        )
        })
        module.exports = router; 

