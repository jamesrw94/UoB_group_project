const express = require('express');
const router = express.Router();
const data = require('./data.json')
var mongoose = require("mongoose");



function find (name, query, cb) {
    mongoose.connection.db.collection(name, function (err, collection) {
       collection.find(query).limit(1).toArray(cb);
   });
}

function find_random (name,newspaper,topic, cb) {
    mongoose.connection.db.collection(name, function (err, collection) {
       collection.aggregate([{$match:{"paper":newspaper,"term":topic}},{$sample:{size:1}}]).toArray(cb);
   });
}


const paperSchema = new mongoose.Schema({newspaper:String,correct_answers:Number, incorrect_answers:Number});
const paperModel = mongoose.model('paper',paperSchema,"newspaper_results")

async function update_newspaper_correct(name,paper) {
	var doc = await paperModel.findOne({newspaper:paper}).exec();
	doc.correct_answers=doc.correct_answers+1;
	await doc.save();

}

async function update_newspaper_wrong(name,paper){
	var doc = await paperModel.findOne({newspaper:paper}).exec();
	doc.incorrect_answers=doc.incorrect_answers+1;
	await doc.save();
}


const db = mongoose.connection;
const tweetSchema = new mongoose.Schema({paper:String,term:String,text:String,link:String});
const Tweets = mongoose.model('tweets',tweetSchema,'test_collection');

/* GET api listing. */
router.get('/', (req, res) => {
  res.header("Content-Type",'application/json');
  update_newspaper_wrong("newspaper_results", "DailyMail")
  find_random('test_collection',"Guardian","Politics", function(err,mdata){  
 	 res.send(JSON.stringify(mdata))});
});

module.exports = router;
