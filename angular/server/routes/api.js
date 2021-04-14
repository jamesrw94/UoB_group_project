const express = require('express');
const router = express.Router();
const data = require('./data.json')
const mongoose = require("mongoose");
// import * as mongoose from "mongoose";

/* GET api listing. */
router.get('/', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})

function find_random (nameOf,newspaper,cb) {
  mongoose.connection.db.collection(nameOf, function (err,collection) {
     collection.aggregate([{$match:{"paper":newspaper,"term":"Brexit"}},{$sample:{size:1}}]).toArray(cb);
 });
}

module.exports = router;
