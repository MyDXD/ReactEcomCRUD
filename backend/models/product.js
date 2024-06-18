const mongoose = require("mongoose"); 
// นำเข้าไลบรารี Mongoose ซึ่งใช้ในการทำงานกับ MongoDB

const productSchema = new mongoose.Schema({ 
// กำหนด Schema สำหรับคอลเลกชัน "products"
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  stock: {
    type: Number,
    required: true,
  },

  images: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema); 
// สร้างโมเดลชื่อ "Product" จาก Schema ที่กำหนดเพื่อใช้ในการทำงานกับคอลเลกชัน "products"

module.exports = Product;
// ส่งออกโมเดล "Product" เพื่อให้สามารถใช้ในไฟล์อื่นๆ ของโปรเจกต์ได้
