var pdf = require("html-pdf");

pdf.create("MEU NOME É BRUNO",{}).toFile("./arquivo.pdf",(err,res) => {
    if(err){
        console.log("Ocoreu um erro: "+err);
    }else{
        console.log(res);
    }
});