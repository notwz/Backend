

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

console.log(date);


const app = express();

// able to push items into an array that is const, but can NOT assign a new array or object 
const items = ["Buy food", "Cook food", "Eat food"];
let workItems = [];


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));


app.set('view engine', 'ejs');

app.get("/", function (req, res) {

    // old way 
    //res.sendFile(__dirname + "./index.html");

    // let today = new Date();

    // let options = {
    //     weekday: 'long',
    //     day: 'numeric',
    //     month: 'long'
    // };

    // let day = today.toLocaleDateString("en-US", options);

    // using our date module 
    let day = date.getDate();
    // or could use: let day = date.getDay();

    res.render("list", {
        listTitle: day,
        newListItems: items
    });

});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }


});

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
})

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", function (req, res) {
    res.render("about");

})

app.listen(3000, function () {
    console.log("Server on 3000")
});