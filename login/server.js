const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config()
const port = process.env.PORT || 5000
const userRouter = require("./routes/userRouter")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouter)
var indexRouter = require("./routes/index");
// HTTP logger



// Template engine
app.set('view engine', 'pug');
app.set('views', './views');

var logger = require("morgan");
app.get('/register', function (req, res) {
  res.render('register');
})


app.listen(port, () => console.log('> Server is up and running on port : ' + port))

// required libs : mongoose | colors
// run the following command
// npm i mongoose colors
app.use(express.json());
app.use(logger("start"));
app.use(express.urlencoded({ extended: false }));
const colors = require('colors');
const mongoose = require('mongoose')
mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('> Connected...'.bgCyan))
  .catch(err => console.log(`> Error while connecting to mongoDB : ${err.message}`.underline.red))
// function initial() {
//   // The estimatedDocumentCount() function is quick as it estimates the number of documents in the MongoDB collection. It is used for large collections because this function uses collection metadata rather than scanning the entire collection.

//   Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "user",
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'user' to roles collection");
//       });

//       new Role({
//         name: "moderator",
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'moderator' to roles collection");
//       });

//       new Role({
//         name: "admin",
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'admin' to roles collection");
//       });
//     }
//   });
// }
// initial;