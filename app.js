const http = require('http');
const fs = require('fs');
const server  = http.createServer((req,res)=>{
   const url = req.url;
   const method = req.method;
   if(url==='/'){
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    fs.readFile('message.txt','utf-8',(err,data) =>{
        res.write(`<h4>${data}</h4>`);
        res.write('<body><form action="/message" method="POST"><input type="text" name ="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    })
    
    
   }
   else if(url==='/message' && method==='POST'){

    const body=[];
    req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
    });
    return req.on('end',()=>{
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);//mesage=hello
        const message = parsedBody.split('=')[1];
        fs.writeFile('message.txt',message,(err)=>{
         res.statusCode=302;
         res.setHeader('Location','/');
         return res.end();
        });
    })
    
    
  }
  else{
   res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>Nodejs Tutorial</title></head>');
   res.write('<body><h1>Welcome</h1></body>');
   res.write('</html>');
   res.end(); 
  }

})
server.listen(4000);

