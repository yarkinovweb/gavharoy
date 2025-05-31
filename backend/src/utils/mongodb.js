import { MongoClient } from "mongodb"

const uri = "mongodb+srv://yarkinovweb:NHOTt50v0Odu149h@cluster0.eyngkp4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri)

const db = client.db("services")

async function connect(){
    await client.connect()
    console.log("Mongo db ga ulandi")
}

export {db, connect}