const express = require('express');
const router = express.Router();
const data = require('./data.json')
var mongoose = require("mongoose");


function find (name, query, cb) {
    mongoose.connection.db.collection(name, function (err, collection) {
       collection.find(query).limit(1).toArray(cb);
   });
}


const db = mongoose.connection;
const tweetSchema = new mongoose.Schema({paper:String,term:String,text:String,link:String});
const Tweets = mongoose.model('tweets',tweetSchema,'test_collection');

/* GET api listing. */
router.get('/', (req, res) => {
  res.header("Content-Type",'application/json');
  Tweets.find({}, function(err, mdata) { console.log(err, mdata, mdata.length); });
  find('test_collection',{}, function(err,mdata){  
 	 res.send(JSON.stringify(mdata))});
});

module.exports = router;
