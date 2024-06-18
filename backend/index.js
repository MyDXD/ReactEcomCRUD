const express = require('express');
const cors = require("cors");
const Product = require("./models/product"); // นำเข้าโมเดล Product
const bodyParser = require('body-parser'); // นำเข้า body-parser สำหรับการจัดการ req.body

//Importing the mongoose package
const mongoose = require('mongoose')
const app = express();
const port = 5000;

app.use(cors()); 
app.use(bodyParser.json());

//Creating the connection
mongoose
.connect("mongodb://localhost:27017/")
.then(()=> console.log("Connected to MongoDB"))
.catch((err) => console.log("Could not connect to MongoDB"))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Get the all product list
app.get("/read", async (req, res) => {
  const productList = await Product.find();
  res.send(JSON.stringify(productList));
});

//Create the new product
app.post("/create", async (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
    thumbnail: req.body.thumbnail,
    images: req.body.images,
  });

  await Product.create(newProduct);
  res.send("Product saved to the database!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});