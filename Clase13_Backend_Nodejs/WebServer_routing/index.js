const http = require('http');
const file = require('fs');

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    let url = req.url;
    console.log(url);
if(url === "/"){
    file.readFile('html/index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}else if(url === "/about"){
    file.readFile('html/about.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}else if(url === "/contact"){
    file.readFile('html/contact.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}else if(url === "/location"){
    file.readFile('html/location.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}else if(url === "/mission"){
    file.readFile('html/mission.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}
});
server.listen(port, hostName, () => {
    console.log(`Server listen at ${hostName} throught port : ${port}`);
});