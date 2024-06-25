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
.connect("mongodb://localhost:27017/project-ecom")
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

//Update a product based on the id
app.put("/update/:id", async (req, res) => {
  const product_id = req.params.id;
  await Product.findByIdAndUpdate(product_id, {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    discountPercentage: req.body.discountPercentage,
    rating: req.body.rating,
    stock: req.body.stock,
    brand: req.body.brand,
    category: req.body.category,
    thumbnail: req.body.thumbnail,
    images: req.body.images,
  });

  res.send("Product updated successfully!");
});

//Delete a product based on the id
app.delete("/delete/:id", async (req, res) => {
  const product_id = req.params.id;
  await Product.findByIdAndDelete(product_id);
  res.send("Product deleted!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});