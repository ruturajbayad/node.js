const e = require('express');
const express = require('express');
const connection = require('../crud-with-mongo/connection');

const app = express();

app.use(express.json()); //we are always post or retrieve json data 

app.post('/', async (req,resp) => {
        let db = await connection();
        let result = await db.insertOne(req.body);
        if(result.acknowledged)
        {
            resp.send("data has inserted successfully");
        }
        else 
        {
            resp.send("data has not inserted");
        }
        // resp.send(result);
});

app.listen(5000);

// how to send json data :- using postman api use raw method and convert in to json and send using link localhost:5000
// we can use multiple methods in the same program like GET and POST