const mongoose = require("mongoose");

// uri =
//   "mongodb+srv://pranavsinghofficial8:NhOPoSgyaYoYtRyR@pranavapi.2jtsrn7.mongodb.net/PranavAPI?retryWrites=true&w=majority";

const connectDB = (uri) => {
  console.log("Connected to DB");
  // console.log(uri);
  
  return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true });
};

module.exports = connectDB;
