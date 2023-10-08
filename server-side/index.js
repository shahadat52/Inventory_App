const express = require("express");
const jwt = require("jsonwebtoken")
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();


app.use(cors())
app.use(express.json())

// DB_USER=stockSage
// DB_PASS=gw3zkNqcdZuZiFzv

// mongodb connection string 
const uri = "mongodb+srv://stockSage:gw3zkNqcdZuZiFzv@cluster0.xo63l6y.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// database
const database = client.db("stockSage")

async function run() {
    try {
        const usersCollection = database.collection("users")

        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            res.send(result)

        })

        // sending token to client api
        app.get("/jwt", async (req, res) => {
            console.log(process.env.ACCESS_TOKEN);
            const email = req.query.email;
            console.log(email);
            const query = { email: email };
            const user = await usersCollection.findOne(query);
            if (user) {
                const token = jwt.sign({ email }, '515c766299ddcfa000535801e86294d2ddcd1865845100743693f9720f68db49c16ecb7af46a046593ab7186115ad7bf8197c411732ea1ef4cb3e7f751b0d660', { expiresIn: '1h' });
                res.send({ accessToken: token })
            }
            res.status(403).send({ accessToken: "" })

        })
    }
    catch (error) {
        console.log(error);
    }


}
run().catch((error) => console.log(error))
console.log(process.env.USER_ID);
console.log(process.env.DB_USER);
console.log(process.env.ACCESS_TOKEN);

app.get('/', (req, res) => {
    res.send("stockSage server is running")
});

app.listen(port, () => {
    console.log(`StockSage server is running on ${port}`)
})