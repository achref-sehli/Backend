const express= require('express');

const {User} = require('../models/user.model');
const router = express.Router();

const bcrypt = require('bcrypt') ;

 const jwt = require('jsonwebtoken');
const { request } = require('express');


// Lire toutes les utilisateurs
 router.get("/getallusers" , (req,res)=>{
     
    User.find().then(
        (allusers)=>{
            console.log(allusers);
            res.send(allusers);
        },
        (err)=>{
            console.log(err);
        }
    )
})

//Ajouter l'utilisateur
    router.post("/ajoutuser", async (req,res)=>{
    let a =req.body;
    usr= new User(a);
    const salt = await bcrypt.genSalt(10);
    usr.password = await bcrypt.hash( usr.password , salt) ;

    usr.save().then(
      (a)=>{
          console.log(a);
          res.send(a);
      },
      (err)=>{
          console.log(err);
      } 
    );

});
//Login
    router.post('/login', (req , res) => {
    let user =req.body;
    User.findOne({email : user.email}).then(
    async (usr)=>{
        if(usr){
            let validate = await bcrypt.compare(user.password ,usr.password);
            if(validate== true){
            let subject = {user : usr};
            let token = jwt.sign(subject , 'secretkey') ; 
            res.send({token : token});
        }else {
            res.send('invalid password') ;
        
        }
        }else{
                res.send('email invalid') ; 
            

        }},

        (err)=>{
            console.log(err);
        }        
    )}
    )
    //Get user by email
    router.get("/getuserbymail/:mail",(req,res)=>{
        let m = req.params.mail;
        User.findOne({
            email : m
        }).then (
            (user)=>{
                console.log(user);
                res.send(user);
            },
            (err)=>{
                console.log(err);
    
            }
         )
    
    })
    //Lire l'utilisateur By ID
    router.get("/getuserbyid/:id",(req,res)=>{
        let  id = req.params.id;
        User.find({_id:id}).then(
            (user)=>{
                console.log(user);
                res.send(user);
            },
                 (err)=>{
                 console.log('erreur');
            }
     
        ) ;
     }
     );
     //supprimer l'utilisateur
     router.delete("/deleteuser/:id",(req,res)=>{
        id=req.params.id;
        User.findByIdAndDelete({
            _id:id
            
        }).then(
            (user)=>{
                console.log(user);
                res.send(user);
            },
           (err)=> {
               console.log(err);
           }
        )
        });
    //Modifer un utilisateur
    router.put('/updateuser/:id' , async (req , res)=>{
        id = req.params.id;
        
        usr = req.body;
        console.log(usr.password);
        

        console.log(usr.password);
        User.findByIdAndUpdate({_id : id},{
            name : usr.name,
            lastname : usr.lastname,
            email: usr.email,
            password: usr.password,
            phone : usr.phone,
            role : usr.role
        
        }).then(
            (art)=>{
                res.send(art)
        
            },
            (err)=>{
                console.log(err);
        
            }
        )
        })
        router.put('/updateprofile/:id' , async (req , res)=>{
            id = req.params.id;
            
            usr = req.body;
            newpassword = usr.nwpd;
            console.log(usr.password,newpassword);
            if (newpassword != ""){
                const salt = await bcrypt.genSalt(10);
                usr.password = await bcrypt.hash( usr.nwpd , salt) ;
            }

            
    
            console.log(usr.password);
            User.findByIdAndUpdate({_id : id},{
                name : usr.name,
                lastname : usr.lastname,
                email: usr.email,
                password: usr.password,
                phone : usr.phone,
                role : usr.role
            
            }).then(
                (art)=>{
                    res.send(art)
            
                },
                (err)=>{
                    console.log(err);
            
                }
            )
            })


    module.exports = router;        