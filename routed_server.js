// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Reservation Entries
var reservation = [
    {
        customerName: "name",
        phoneNumber: "phone",
        customerID: "email",
        customerID: "uniqueID"
    },
];

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    // res.send("First page / initial.html page!")
    res.sendFile(path.join(__dirname, "initial.html"));
});

app.get("/tables", function (req, res) {
    // res.send("Display the table.html")
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    // res.send("Displays the add.html")
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/tables", function (req, res) {
    // res.send("Sends raw JSON for the table reservation API call")
    res.send();
});

app.get("/api/waitlist", function (req, res) {
    // res.send("Sends raw JSON for the waitlist API call!")
    res.send();
});

app.post("/submit-form", function (req, res) {
    // res.send("Sends raw JSON for the waitlist API call!")
    console.log("Submit form button pressed!");
    res.redirect("/");
});




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
