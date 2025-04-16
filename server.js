// this is my backend Server 

const http=require("http"); //common js  // import


const fs=require("fs");


// import test from "test"   // module 

// import http from "http";


const admin={
    id:11313,
    email:"kshd@zjdgzj.com",
    passord:"kqhdkzzkh12"
}



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
        id:1,
        name:"Product4",
        price:3022.22,
        disponibilité:false
    },
]




function ReadCustomFile(file,res){
    fs.readFile(file,(err,data)=>{
        if(err){
            res.statusCode=500;
            res.end("Erreur ");
        }else{
            res.statusCode=200;
            res.end(data.toString());
        }
    })
}



const Server=http.createServer((req,res)=>{


//    if(req.url=="/produit" && req.method=="GET"){
//     res.end("Tu cherches le produit x  ")
//    }else{
//     res.end("Not found");
//    }


// Req method  GET POST DELETE PATCH PUT 

// Url 

const reqUrl=req.url; 

const reqMethod=req.method;

// DB 




// if(reqUrl=="/stories" && reqMethod=="GET"){
//     res.statusCode=200;
//     res.end("<h1>This is Stories Page from Our web server</h1>")
// }else if(reqUrl=="/posts" && reqMethod=="GET"){
//     res.statusCode=200;
//     res.end("<h1>This is Posts Page from Our web server</h1>")

// }else if(reqUrl=="/users" && reqMethod=="GET"){
//     res.statusCode=200;


    
   
    
// }


// else if(reqUrl=="/admin-area" && reqMethod=="GET"){
//     res.statusCode=403;
//     res.end("<h1>Tu n'es pas autorisé pour faire cette action </h1>")
// }else if(reqUrl=="/api/list-products" && reqMethod=="GET"){
     
//       res.statusCode=200;

//       res.end(JSON.stringify(products));
// }

// else{
//     res.statusCode=400;
//     res.end("<h1>Error Page 404 Not found</h1>");
// }



if(reqUrl=="/" && reqMethod=="GET"){

    ReadCustomFile("index.html",res)
}
 
else if(reqUrl=="/about" && reqMethod=="GET"){
    ReadCustomFile("about.html",res)
}else if(reqUrl=="/contact" && reqMethod=="GET"){
    ReadCustomFile("contact.html",res)

}






}
)






Server.listen(3000,()=>{
    console.log("Your server is running on http://localhost:3000")
})










console.log("it's working");








