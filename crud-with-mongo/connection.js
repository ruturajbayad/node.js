const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'newdb';
const client = new MongoClient(url);    

async function connection() {

    let result = await client.connect();
    let db = result.db(database);
    return collection = db.collection('student');
}

module.exports = connection;

// first method that use to hendle promise using then function
// connection().then((resp)=> {
//     resp.find({}).toArray().then((data)=>{
//       console.log(data);
//     })
// });

// second method 
// const main = async () =>{
//       let data = await connection();
//       data = await data.find().toArray();
//       console.log(data);
// }
// main();

// connection();