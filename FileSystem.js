// Manipulation des fichiers (File handling )



// fichier(read update write delete rename)

import fs from "fs"

// Read File

// fs.readFile("index.html",(err,data)=>{

//     if(err){
//         console.log("Une erreur est survenu ");
//     }else{
//         console.log(data.toString())
//     }
// })



// Write on file   // créer un nouveau fichier

// fs.writeFile("secretfile.txt","Now something else",(err)=>{

//     if(err){
//         console.log("Impossible de Créer ou bien d'écrire sur le fichier")
//     }else{
//         console.log("Fichier créer avec succés")
//     }
// })



// Update A file


// Modifier et concerver la valeur du fichier 


// fs.appendFile("secretfile.txt","\nthis is new line",(err)=>{


//     if(err){
//         console.log("Erreur survenu ");
//     }else{
//         console.log("le fichier a ete bien modifié ");
//     }
// })


// Rename File 

// fs.rename("secretfile.txt","nonsecretfile.txt",(err)=>{


//     if(err){
//         console.log("Erreur");
//     }else{
//         console.log("File renamed successfully");
//     }
// })



// Delete File 

// fs.unlink("secretfile.txt",(err)=>{
//     if(err){
//         console.log("something went wrong ");
//     }else{
//         console.log("file deleted successfully");
//     }
// })







// const data="\ntype:remote"

// fs.appendFile("Gomycode.txt",data,(err)=>{


//     if(err){
//         console.log("erreur")
//     }else{
//         console.log("Fichier crée");
        
//     }
// })

// Créer Un dossier 
// fs.mkdir("images",(err)=>{
//     if(err){
//         console.log("erreur");
//     }else{
//         console.log("Dossier crée");
        
//     }
// })


// Supprimer un dossier 

// fs.rmdir("images",(err)=>{
//         if(err){
//             console.log("erreur");
//         }else{
//             console.log("Dossier Supprimé");
            
//         }
// })



// Lire le contenu d'un dossier 

fs.readdir("document",(err,files)=>{
    if(err){
        console.log("Erreur ")
    }else{
        console.log(files)
    }
})