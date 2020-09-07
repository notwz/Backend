const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy food", "Cook food", "Eat food"];

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    //res.sendFile(__dirname + "./index.html");

    let today = new Date();

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleDateString("en-US", options);
    
    res.render("list", {kindOfDay: day,newListItems: items });

});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    items.push(item);

    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server on 3000")
});