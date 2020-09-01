const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_feilds: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };

  const jsonData = JSON.stringify(data);
  const url = "https://us17.api.mailchimp.com/3.0/lists/e2bf4a9467";  
  const options = {
    method: "POST",
    auth: "will1:aeea88a14db907b169dc276e337d09b2-us17"
  };

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/sucess.html");

    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    })
  })

  request.write(jsonData);
  request.end();



  console.log(email);
})

app.post("/failure", function(req, res) {
  res.redirect(__dirname +"signup.html");
  
})

app.listen(3000, function () {
  console.log("Server is running on port 3000");

})

// mailchimp API key: aeea88a14db907b169dc276e337d09b2-us17
// unique list id: e2bf4a9467