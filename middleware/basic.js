// basic middleware are used to filter user or we can say that its help to authenticate user

const express = require('express');
const app = express();

// here is the middleware that authenticates age of user
const requestFilter = (req,resp,next) => {
    if(!req.query.age)
    {
        resp.send("<h1>Enter your age</h1>");
    }
    else if(req.query.age< 18)
    {
        resp.send("<h1>You are under 18</h1>");
    }
    else
    {
        next();
    }
}
app.use(requestFilter);

app.get('/', (req,resp)=>{
        resp.send("<h1>Welcome to the home page.</h1>");
});

// how to test user authentication:-
// localhost:4000 
// localhost:4000?age=10
// localhost:4000?age=20

app.listen(4000);