// this is a simple example of express module 
const express = require('express');
const app = express();

// useing get method we can send data to the server 
app.get('/', (req, resp)=>{
    resp.send("hello");
});

// how to access the home page :- localhost:5000/home 
app.get('/home', (req,resp) => {
    resp.send(" wlecome home ");
});

app.listen(5000);
