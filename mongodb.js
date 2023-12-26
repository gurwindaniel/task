// CRUD Create Read Update and Delete
const {MongoClient,ServerApiVersion}=require('mongodb')



const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'


const client= new MongoClient(connectionURL,{
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run(){
    try{

        await client.connect()
        
        console.log("Connected to MongoDB")
         const db=await client.db("task-manager")
        db.collection('users').insertOne({
            name:'Daniel3',
            email:'daniel3@gmail.com',
            age:27
        })

    }catch(e){
        console.log("Error occureds")
        console.log(e)
    }finally{
        // client.close()
    }
}


run();


