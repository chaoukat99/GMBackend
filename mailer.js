// Node Mailer


import nodemailer from "nodemailer";

import dotenv from "dotenv";

import _ from "lodash";

dotenv.config();

// 1-configurer transport 


const transport = nodemailer.createTransport({
    service:"Gmail",
    auth:{
      user:"omar1chaoukat@gmail.com",
      pass:process.env.EMAILPASS
    
    }
})



// 2- send Emails 

// 2-1 Créer email 


// const randomnum=Math.floor(Math.random()*9999999);
const random= _.random(1000,9000);




const options={
    from:"omar1chaoukat@gmail.com",
    to:["chaoukatweb@gmail.com"],
    subject:"This is A test Subject ",
   
    html:`<h1>Votre code de verification est : <span style='color:green'>${random}</span>  </h1>`

}

// 2-2 D'envoyer email


transport.sendMail(options,(err,info)=>{
    if(err){
        console.log("Erreur email",err);
    }else{
        console.log("Email envoyé "+info)
    }
})






// console.log(process.env.EMAILPASS);