const express = require('express');
const mongodb = require('mongodb');
const connection = require('../crud-with-mongo/connection');

const app = express();
app.use(express.json());
app.delete('/:id', async (req,resp) => {
        let db = await connection();

        // using id when we work on large project it will use 
        let result = await db.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
        // let result = await db.deleteOne({name:req.params.id}); //using name localhost:5000/Rutu
        if(result.deletedCount>0)
        {
                resp.send("Data was deleted ");
        } 
        else
        {
            resp.send("Data is not deleted");
        }
});

app.listen(5000);
// how to exicute this program in postman api
// localhost:5000/ID and click on send 