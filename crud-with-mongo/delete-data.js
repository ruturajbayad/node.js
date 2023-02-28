const connection = require('./connection');

const deletedata = async () => {
    const db = await connection();

    //using deleteOne({}) and deleteMany({}) function we can delete data from mongodb
    const result = await db.deleteOne({name:"rutu"});
    if(result.acknowledged)
    {
        console.log("Data is Deleted ");
    }
    else
    {
        console.log("Not Deleted ");
    }
}

deletedata();