const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use('/add-product',(req,res,next)=>{
    console.log('In the Add product page');
    res.send('<html><head><title >Add Product</title></head><body><form action="/product" method="POST" ><input type="text" name="title"><button type="submit">send</button></form></body></html>');

})
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.send('<html><head><title >products</title></head><body><form action="/" method="POST" ><input type="text" name="size"><button type="submit">Enter Size</button></form></body></html>');
    
})
app.use('/',(req,res,next)=>{
    console.log(req.body);
    res.send('<h1>Hello from Express</h1>');
    
})
app.listen(3000);
