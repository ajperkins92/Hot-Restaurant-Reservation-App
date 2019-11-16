// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

require("dotenv").config();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.host || "locahost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.password,
  database: "restaurant_reservation_list"
});

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
  }
];

connection.connect(function(err) {
  if (err) throw err;
  app.get("/", function(req, res) {
    // res.send("First page / initial.html page!")
    res.sendFile(path.join(__dirname, "initial.html"));
  });

  app.get("/tables", function(req, res) {
    // res.send("Display the table.html")
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reserve", function(req, res) {
    // res.send("Displays the add.html")
    res.sendFile(path.join(__dirname, "add.html"));
  });

  app.get("/api/tables", function(req, res) {
    // res.send("Sends raw JSON for the table reservation API call")
    res.send();
  });

  app.get("/api/waitlist", function(req, res) {
    // res.send("Sends raw JSON for the waitlist API call!")
    res.send();
  });

  app.post("/submit-form", function(req, res) {
    // res.send("Sends raw JSON for the waitlist API call!")
    console.log("Submit form button pressed!");
    console.log(req.body);

    saveToDB(req.body);
    res.redirect("/");
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

const saveToDB = obj => {
  console.log(Object.values(obj));
  const sqlStatement = "INSERT INTO res_list SET ?;";
  connection.query(
    sqlStatement,
    {
      customerName: obj.name,
      phoneNumber: obj.phone,
      customerEmail: obj.email,
      customerID: obj.ID
    },
    (err, res) => {
      if (err) throw err;
      console.log("Values saved");
    }
  );
};
