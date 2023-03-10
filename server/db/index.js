require('dotenv').config({path: '../.env'})
const mongoose = require('mongoose');
const mongoDB = process.env.MONGO_URI;

console.log('MONGO_URI:', process.env.MONGO_URI);

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: "true"
});

const db = mongoose.connection;

module.exports = db