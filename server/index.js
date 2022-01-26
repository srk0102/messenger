// Importing NPM modules.
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

// NOTE - delete if your work is done.
//Connecting to db
require("./dbConnection/connect")

//Declaring express to app variable.
const app = express();

// Importing routes from routes folder.
const routes = require('./routes/routes')

//letting app to use cors to access the localhost and express.json to modify the data to json
app.use(express.json());
app.use(cors());

//letting app to use routes from route folder
app.use('/', routes);

//Initilizing port and declaring the port number
const PORT = 5000

//Initilizing server
app.listen(PORT, () => console.log('Server listening on port ' + PORT));