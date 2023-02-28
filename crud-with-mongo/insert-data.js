const connection = require('./connection');

const insert = async () => {
    const db = await connection();

// insertOne({}) function is used to insert one data at a time 
    const result = await db.insertOne({name:"chagan"});

// insertMany([{}]) function is used to insert multipel data at a time
    // const result = await db.insertMany(
    //     [
    //         {name:"sahil"},
    //         {name:"smit"}
    //     ]
    // );

// result.acknowledged return true when data inserted
    if(result.acknowledged)
    {
        console.log("Data Inserted");
    }
    else{
        console.log("Not Inserted");
    }
}

insert();