const express= require('express');

const {Produit} = require('../models/produit.model');

const router = express.Router();



// Lire toutes les produits
router.get("/getallproduits" , (req,res)=>{
    Produit.find().then(
        (allproduits)=>{
            console.log(allproduits);
            res.send(allproduits);
        },
        (err)=>{
            console.log(err);
        }
    )
})
//Ajouter un produit
router.post("/ajoutproduit",(req,res)=>{
    let a =req.body;
    produit= new Produit(a);
    produit.save().then(
      (a)=>{
          console.log(a);
          res.send(a);
      },
      (err)=>{
          console.log(err);
      } 
    );
    
    });
     //Lire un produit By ID
     router.get("/getproduitbyid/:id",(req,res)=>{
        let  id = req.params.id;
        Produit.findOne({_id:id}).then(
            (produit)=>{
                console.log(produit);
                res.send(produit);
            },
                 (err)=>{
                 console.log('erreur');
            }
     
        ) ;
     }
     );
     //supprimer un produit
     router.delete("/deleteproduit/:id",(req,res)=>{
        id=req.params.id;
        Produit.findByIdAndDelete({
            _id:id
            
        }).then(
            (produit)=>{
                console.log(produit);
                res.send(produit);
            },
           (err)=> {
               console.log(err);
           }
        )
        });
    //Modifer un produit
    router.put('/updatefamille/:id' , (req , res)=>{
        id = req.params.id;
        prod = req.body;
        Produit.findByIdAndUpdate({_id : id},{
            name : prod.name,
            
        
        }).then(
            (prod)=>{
                res.send(prod)
        
            },
            (err)=>{
                console.log(err);
        
            }
        )
        })
        module.exports = router; 

