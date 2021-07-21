

// Ejemplo de servidor Web
//Módulos a utilizar. Primero los externos, después los propios

const http = require('http');
const calc = require('../modules/calculator')
let cowsay = require("cowsay");

let msj = cowsay.say({
  text : `Bienvenido al maravilloso mundo de Noe ${calc.sum(2,5)}`,
  e : "-O",
  T : "U "
});
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
   // http header
 res.writeHead(200, {'Content-Type': 'text/html'}); 
      
 let url = req.url;
   
 if(url ==='/') {
     res.write(msj); 
     res.end(); 
 }
 else if(url ==='/contact') {
     res.write(' Welcome to contact us pag'); 
     res.end(); 
 }
 else {
     res.write('Error 404!!!'); 
     res.end(); 
 }
  

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Otro ejemplo


