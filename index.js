const http = require("http");
const path = require("path");
const fs = require("fs/promises");

const app = http.createServer(async( request, response)=>{

    const url = request.url;
    console.log(url);



    if(url === "/"){
        response.setHeader("content-type", "text/html");
        const htmlPath =  path.resolve("./index.html");

        const htmlIndex = await fs.readFile(htmlPath, "utf-8");
        response.write(htmlIndex);
    }

    if(url.includes("style")){

        
        response.setHeader("content-type", "text/css");
        const cssPath = path.resolve("./style.css");
        
        const cssIndex = await fs.readFile(cssPath,"utf-8");
        response.write(cssIndex);
    }

    if(url.includes("app")){
        response.setHeader("content-type", "text/javascript");
        const jsPath = path.resolve("./app.js");
        
        const appIndex = await fs.readFile(jsPath,"utf-8");
        response.write(appIndex);
    }

    response.end();


    
});

const PORT= 3000;
app.listen(PORT);
console.log("reading server");


//escribir dentro de archivos

