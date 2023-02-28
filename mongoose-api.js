const express = require('express');
require('./connect');
const student = require('./models');

const app = express();
app.use(express.json());
app.post('', async (req,resp) => {
    let data = new student(req.body);
    let result = await data.save();
    resp.send(result);
});

app.get('/list', async (req,resp) =>{
    let data = await student.find({});
    resp.send(data);
})


app.put('/update/:_id' , async (req,resp) => {
     let data = await student.updateOne(
        req.params,{
                $set:req.body
         });
     resp.send(data); 
})

app.delete('/dele/:_id', async (req,resp) =>{
        let data = await student.deleteOne(req.params);
        resp.send(data);
})

app.listen(4000);