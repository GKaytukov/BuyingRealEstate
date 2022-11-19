import { MongoClient } from 'mongodb';
import { uri } from "../credentials.js";
export function dbConnect () {
    const client = new MongoClient(uri);
    return client.db("mydatabase");
}

//MongoClient - Nodejs library that handles connecting to and interacting with a MongoDB database.