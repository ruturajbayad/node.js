const connection = require('./connection');

const update= async () =>{
    
    const db = await connection();

//updateOne({},{$set:{}}) is  used to update a single data at a tiem 
    const result = await db.updateOne({name:"Ruturaj"},{$set:{name:"ruturaj"}});
    if(result.acknowledged)
    {
        console.log("Data is Updated ");
    }
    else
    {
        console.log("Not Updated ");
    }
}

update();