const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.set('view engine', 'ejs')

app.get("/", function (req, res) {
    //res.sendFile(__dirname + "./index.html");

    var currentDay = new Date().getDay();
    var day= "";
    if (currentDay === 6 || currentDay === 0) {
        day = "Weekend";
    }
    else {
        day = "Weekday";
    }
    res.render("list", {kindOfDay: day});

});

app.listen(3000, function(){
    console.log("Server on 3000")
});