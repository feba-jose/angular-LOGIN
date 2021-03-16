

const express = require('express');
const bodyParser = require('body-parser');
const mysqlConnection = require('./connection');
 const PeopleRoutes = require('./people');
 var cors=require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/people", PeopleRoutes )


app.listen((3005), ()=>console.log("listening to port 3005"));

