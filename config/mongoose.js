require('dotenv').config();
//require the library
const mongoose = require('mongoose');

// here we are using the MongoDB Url we defined in our ENV file
const DB_URL = require('./key').MongoURI;

//connect to the database
mongoose.connect(DB_URL , 
  {
    usenewurlparser: true,
    useunifiedtopology: true
  }).then(()=>{
    console.log(`Connected to Database Successfully `);
  }).catch((err)=>{
    console.log(`Error connecting to Database` , err);
  })
 

// acquire connection (to check if its successful)
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

// db.once('open', function () {
//   console.log('Connected to Database :: MongoDB');
// });

// module.exports = db;
