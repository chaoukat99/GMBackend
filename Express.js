// Express  Js

import express from "express"






const Server=express();


// Get qui va retourner une reponse html avec un code status 200

// Express Version

Server.get("/",(req,res)=>{
    res.status(200).send("<h1>Hello Server</h1>")
})



// http version 
// if(reqUrl=="/" && reqMethod=="GET"){
//     res.statusCode=200;
//     res.end("<h1>Hello Server</h1>")
// }

Server.listen(3000,()=>{
    console.log("server is running on http://localhost:3000")
})