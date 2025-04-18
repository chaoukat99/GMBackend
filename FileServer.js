import express from "express"

import bodyParser from "body-parser"
import fs from "fs"
const PORT=3005;




const app=express();


app.use(bodyParser.json());

// Get 





const userAge=15;

const AgeMiddleware=(req,res,next)=>{
    if(userAge>18){
        next();
    }else{
        res.status(403).json({message:"Age Invalid"})
    }

}





app.use("/files",AgeMiddleware);


app.get("/",(req,res)=>{


    res.status(200).send("<h1>It's Working</h1>");
})


// GET  Lire Un fichier donner en parametres 



app.get("/files/read-content/:filename/:ext",(req,res)=>{
 

    const filename=req.params.filename;

    const extension=req.params.ext;



let str="hello";



    fs.readFile(`${filename}.${extension}`,(err,data)=>{
        if(err){
            res.status(404).json({msg:"Unfound File"});
        }else{
            res.status(200).json({content:data.toString()})
        }
    })



})




app.post("/files/add-new-file",(req,res)=>{


   const {filename,data,ext}=req.body;



//    Traitement pour créer un fichier 

     fs.writeFile(`./files/${filename}.${ext}`,data,(err)=>{
        if(err){
            res.status(500).json({msg:"Something went wrong on the server "});
            // console.log(err);
        }else{


            res.status(201).json({msg:`le fichier ${filename} a ete bien creer `});
        }
     })

})



app.patch("/files/update-content/:filename/:ext",(req,res)=>{


    const filename=req.params.filename;
    const extension=req.params.ext;



    const {new_value}=req.body;




    fs.appendFile(`./files/${filename}.${extension}`,new_value,(err)=>{



        if(err){
            res.status(500).json({msg:"Spmethin went wrong on updating the file"});
        }else{
            res.status(202).json({msg:"Fichier modifie "});
        }
    })




      
    
})




app.delete("/files/delete-file/:filename/:ext",(req,res)=>{

  

    const filename=req.params.filename;
    const extension=req.params.ext;



    fs.unlink(`./files/${filename}.${extension}`,(err)=>{
        if(err){
            res.status(500).json({msg:"Something went wrong on deleting the file "});
        }else{

            res.status(204).json({msg:"file deleted successfully"});
        }
    })

})








app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:"+PORT)
})





