const express = require("express");



const app = express();

app.get("/", function (req, res) {
    res.send("hello");
});

app.get("/contact", function (req, res) {
    res.send("contact me at: @gmail.com");
});

app.listen(3000, function () {
    console.log("server started on port 3000");

})