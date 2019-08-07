 const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const portNumber = 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res) => {
    res.send("Akjdwlklawdwad from server");
})

app.listen(portNumber,() => {
    console.log("server running");
})
