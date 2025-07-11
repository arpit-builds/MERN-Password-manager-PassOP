const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()

// connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

// Database Name
const dbName = 'Pass-OP';

const app = express()
const port = 3000

app.use(bodyparser.json())
app.use(cors())

client.connect();
console.log('Connected successfully to server');

app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.find({}).toArray();
  res.json(findResult)
})

app.post('/', async (req, res) => {
  const passwords = req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.insertOne(passwords);
  res.send({success: "true", result: findResult})
})

app.delete('/', async (req, res) => {
  const passwords = req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.deleteOne(passwords);
  res.send({success: "true", result: findResult})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})