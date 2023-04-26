require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product"); // Schema is imported

const ProductJson = require("./products.json");

const start = async() =>{

  try {
    await connectDB(process.env.MONGODB_URL2) // connection with DB is established
    await Product.deleteMany();    // values in DB are not duplicated
    await Product.create(ProductJson);
    console.log("success")
  } catch (error) {
    console.log(error);
  }

};

start();