// 1-installer express // npm i express 

// const express=require("express"); // commonjs method 

import express from "express"; // 2- importing express framework 

import {rateLimit} from "express-rate-limit";

import bodyParser from "body-parser";

import fs from "fs";


import  cors from "cors"


// 3-  Instancier express  (Créer Le serveur )

const Server=express();



Server.use(bodyParser.json())

Server.use(cors({
    origin:["https://instructors.learn.gomycode.co","https://www.w3schools.com"],
    methods:['GET','POST']
}))



// Rate Limit middleware 
const limiter = rateLimit({
	windowMs:  1 * 60 * 1000, // 1 minutes
	limit: 4, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    message:"To many Request wait !",
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})



Server.use(limiter);




const PORT=3000;

// Syntax    Server.method(url,(req,res)=>{
    // })

// Get / response HTML 
const users=[
    {
        id:1671,
        username:"john2",
        email:"john2@gmail.com",
        password:"zkhdkazhz",
        location:"Casablanca Moroccco "
    },
    {
        id:1621,
        username:"sara",
        email:"john2@gmail.com",
        password:"zkhdkazhz",
        location:"Sale Moroccco "
    },
    {
        id:1611,
        username:"karim",
        email:"karim@gmail.com",
        password:"zkhdkazhz",
        location:"Fes Moroccco "
    },
    {
        id:1671,
        username:"Samir",
        email:"samir@gmail.com",
        password:"zkhdkazhz",
        location:"Rabat Moroccco "
    }
]




// GET url = /users retourne une reponse de type json qui liste tous les users

// Get url  =  /users/john    retourne une reponse de type json qui list user par son username donné en parametre 


// Server.get(url,function pour gerer req et res)

const products=[
    {
        id:1,
        name:"Product1",
        price:3022.22,
        disponibilité:true
    },
    {
        id:2,
        name:"Product2",
        price:3022.22,
        disponibilité:false
    },
    {
        id:3,
        name:"Product3",
        price:302.22,
        disponibilité:true
    },
    {
        id:4,
        name:"Product4",
        price:3022.22,
        disponibilité:false
    },
]


Server.get("/",(req,res)=>{
  
    
    res.status(200).send("Hello this is from our server")
})




// Créer une requete qui va repondre avec un tableau des produits (json )
Server.get("/products",(req,res)=>{


    res.status(200).json(products);
})



// Créer une requete qui va repondre par un singke product en se basant sur le parametre de l'url 



Server.get("/products/:id",(req,res)=>{

    // Recuperer la valeur du parametre 

    const my_id=req.params.id;

    const product=products.find(el=>el.id==my_id);

    if(product){
        res.status(200).json(product);
    }else{
        res.status(404).send("<h1>404 NOT FOUND</h1>")
    }
   

})




Server.get("/users/stories",(req,res)=>{


     res.status(200).json(users);

})


// get single user 


Server.get("/users/:username",(req,res)=>{


    // Recuperer username from url 

    const usernameUrl=req.params.username;

    const user=users.find(el=>el.username==usernameUrl);


    if(user){
        res.status(200).json(user);
    }else{
        res.status(404).json({message:"Unfound User "});
    }
})





Server.post("/users/login",(req,res)=>{

// Récupérer le body (les données passées par la requéte )

const {email,password}=req.body;

console.log(email,password);

})







//username,password

// GET  http://localhost:3000/users/stories
// fetch("http://localhost:3000/users/stories")
// .then(res=>res.json())
// .then(data=>console.log(data))


// POST  http://localhost:3000/users/login

// fetch("http://localhost:3000/users/login",{
//     method:"POST",
//     headers:{"Content-Type":"application/json"},
//     body:JSON.stringify({
//         email:"Imane@gmail.com",
//         password:"Imane123"
//     })

// })

// La logique de notre serveur 


// 4-Lancer le serveur de dev 

// Post pour Créer des fichiers 



Server.post("/files/add-user",(req,res)=>{

// Get data from request body 

   const {id,nom,age,profession}=req.body;

//    Validate data 


// Traitement

   fs.writeFile(`${nom}.txt`,`Id :${id}\nNom:${nom}\nAge:${age}\nProfession:${profession}`,(err)=>{
    if(err){
        res.status(500).json({msg:"Server Error"})
    }else{
        res.status(201).json({msg:"Fichier créer avec succés"});
    }
   })


})





// PUT PATCH


Server.post("/users/add-new-user",(req,res)=>{

const {id , prenom ,age}=req.body;



// Traitement (insertion des données sur la BD)



res.status(201).json({msg:"User created successfully"});


})





// Put 


Server.put("/users/edit-user/:id",(req,res)=>{

//    Get User Id

const user_id=req.params.id;

// Chercher l(utilisateur avec id recuperer )


const {newValue}=req.body;

// si On trouve utilisateur on va le modifier par le body de la requete




})





Server.put("/files/update-filename/:filename",(req,res)=>{

    const filename=req.params.filename;


    const {newfilename}=req.body;



    // traitement de modifier le nom du fichiers 

    fs.rename(`${filename}.txt`,`${newfilename}.txt`,(err)=>{
        if(err){
            res.status(404).json({msg:"Unfound file "})
        }else{
            res.status(202).json({msg:"Fichier modifié "})
        }
    })
})


// Modifier un seul champ sur l'élement 
Server.patch("/files/update-filename/:filename",(req,res)=>{

    const filename=req.params.filename;


    const {newfilename}=req.body;



    // traitement de modifier le nom du fichiers 

    fs.rename(`${filename}.txt`,`${newfilename}.txt`,(err)=>{
        if(err){
            res.status(404).json({msg:"Unfound file "})
        }else{
            res.status(202).json({msg:"Fichier modifié "})
        }
    })
})




// Delete 



Server.delete("/files/delete-file/:filename",(req,res)=>{


const filename=req.params.filename;


fs.unlink(`${filename}.txt`,(err)=>{

    if(err){
        res.status(404).json({msg:"Unfound file "})
    }else{
        res.status(204).json({msg:"File deleted successfully"});
    }
})


})














Server.listen(PORT,()=>{
    console.log(" server is running on  http://localhost:"+PORT)
})













// CRUD(CREATE READ UPDATE DELETE )



// GET /files/read-filecontent/filename en parametre  | res=le contenu du fichier 

// POST /files/create-new-file (texte) | res = fichier créer



// PUT /file/update-file/fileame(parametre) | essaiyer de modifier le contenu du fichier   | res= fichier modifié 



// DELETE /file/delete-file/filename(parametre) |  supprimer le ficher avec le nom donner en parametres





