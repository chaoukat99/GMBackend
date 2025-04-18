import express from "express"

import dotenv from "dotenv";


dotenv.config();

const admins=[
    {
        id:1,
        username:"admin1",
        password:"Admin123"
    },
    {
        id:2,
        username:"admin2",
        password:"Admin123"
    },
    {
        id:3,
        username:"admin3",
        password:"Admin123"
    },
]




const app = express();


const ApiKeyMiddleware=(req,res,next)=>{


    // 1 - condition verifier si url contient le query parametere (apikey )


    if(!req.query.apikey){
        res.status(403).json({msg:"Invalid Query Parameter "})
    }else{
        if(req.query.apikey!==process.env.APIKEY){
            res.status(403).json({msg:"Invalid password"})
        }else{
            next();

        }
    }



}



app.use("/api/admins",ApiKeyMiddleware);



app.get("/",(req,res)=>{



    res.status(200).json({msg:"Server is working"})
})




app.get("/api/admins",(req,res)=>{
  
    // console.log(req.query)
    res.status(200).json(admins)
})


app.listen(process.env.PORT,()=>{
    console.log("Server is Running");
    
})




