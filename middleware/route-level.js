//when we use basic level middelware we face issue like it will apply on every single route
//But when we use route-level middelware we apply on single route or multiple routes or groups of routes.
// also use a middleware from different files 

const  express = require('express');
const requestFilter = require('./middleware1');
const route = express.Router();
const app = express();

route.use(requestFilter); // <= use when we use group middleware

// middleware in single route
app.get('/',requestFilter, (req,res) => {
        res.send('Welcome to  a home page');
});

// middleware in group
route.get('/about',(req,res) => {
    res.send('Welcome to  a about page');
});

route.get('/contect', (req,res) => {
    res.send('Welcome to  a contect page');
})
 
app.use('/',route);
app.listen(4000);