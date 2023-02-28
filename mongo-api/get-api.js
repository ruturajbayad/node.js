const express = require('express');
const connection = require('../crud-with-mongo/connection');

const app = express();

app.get('/', async (req,resp) => {

    let db = await connection();
    let result = await db.find({name:"ruturaj"}).toArray();
    resp.send(result);
});

app.listen(5000);