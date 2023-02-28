module.exports = requestFilter = (req,resp,next) => {
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