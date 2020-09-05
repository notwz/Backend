const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.get("/", function (req, res) {
    res.sendFile(__dirname + "./index.html")
});

app.listen(3000, function(){
    console.log("Server on 3000")
});