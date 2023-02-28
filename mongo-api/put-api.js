const express = require('express');
const connection = require('../crud-with-mongo/connection');

const app = express();
app.use(express.json());

app.put('/:name', async (req,resp) => {
        let db = await connection();
        let result = await db.updateOne(
            {name:req.params.name}, //req.params.name is used to get name from url 
            { $set : req.body}); 
        // resp.send(result);
            if(result.modifiedCount>0)
            {
                resp.send("Data updated");
            }
            else{
                resp.send("Data is not updated");
            }

});

app.listen(5000);

// how to update data 
// Using postman api tool we can update data 
// step 1 in body use raw and json data 
// step 2 add perameter in url like => localhost:5000\ruturaj
// step 3 add body you want to change  