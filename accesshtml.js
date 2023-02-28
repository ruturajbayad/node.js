// using this program we can access html page from diffrent directory
const express = require('express');
const { access } = require('fs');
const path = require('path');

const app = express();
const dirpath = path.join(__dirname,'public');
// console.log(dirpath);

// using express.static function we can access static page from diffrent directory
// app.use(express.static(dirpath)); 
// how to access this page :-  localhost:5000/home.html

//now here we are going to access page without .html(extenstion) using sendFile function.
app.get('/',(req,resp)=> {
    resp.sendFile(`${dirpath}/home.html`);
}); // by using localhost:5000 it will return home page

app.get('/about',(req,resp) => {
    resp.sendFile(`${dirpath}/about.html`);
}); // by using localhost:5000/about it will return about page


// in this code when user enter different page name then return error page 
app.get('*',(req,resp) => {
    resp.sendFile(`${dirpath}/error.html`);
}); // by using localhost:5000/xyz it will return error page (page not found)


app.listen(5000);
