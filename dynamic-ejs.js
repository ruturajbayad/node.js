const express = require('express');
const app = express();

app.set('view engine', 'ejs'); //required for use of ejs

app.get('/profile', (req,resp)=> {
    const user = {
        name : "Ruturaj",
        age : 20,
        skills : ['php','javascript','node','java']
    }
   
    resp.render('profile',{user}); //render function is used in ejs 
});

app.listen(4000);