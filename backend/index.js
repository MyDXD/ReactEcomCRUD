const express = require('express');

//Importing the mongoose package
const mongoose = require('mongoose')
const app = express();
const port = 5000;

//Creating the connection
mongoose
.connect("mongodb://localhost:27017/")
.then(()=> console.log("Connected to MongoDB"))
.catch((err) => console.log("Could not connect to MongoDB"))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});