const express = require('express');
const router = express.Router();
const data = require('./data.json')
var mongoose = require("mongoose");


var paper_list = ["DailyMailUK","FT","Guardian","Telegraph","TheSun"];

let paper_dict = {DailyMailUK:["FT","Guardian","Telegraph","TheSun"],
                  FT:["DailyMailUK","Guardian","Telegraph","TheSun"],
                  Guardian:["DailyMailUK","FT","Telegraph","TheSun"],
                  Telegraph:["DailyMailUK","FT","Guardian","TheSun"],
                  TheSun:["DailyMailUK","FT","Guardian","Telegraph"]};


function get_random_number(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function get_random_papers(){
    var first_paper = paper_list[get_random_number(0,5)];
    var second_paper = paper_dict[first_paper][get_random_number(0,4)];
    return [first_paper,second_paper];
}



const db = mongoose.connection;
const tweetSchema = new mongoose.Schema({paper:String,term:String,text:String,link:String});
const Tweets = mongoose.model('tweets',tweetSchema,'test_collection');

async function get_both_random(topic,res){
    var p = await get_random_papers();
    Promise.all([
        Tweets.aggregate([{$match:{"paper":p[0],"term":topic}},{$sample:{size:1}}]).exec(),
        Tweets.aggregate([{$match:{"paper":p[1],"term":topic}},{$sample:{size:1}}]).exec()
    ]).then(function(result) {
      res.send([].concat.apply([],result));
  })

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



/* GET api listing. */
router.get('/politics', (req, res) => {
  res.header("Content-Type",'application/json');
  //add check in here to see if the array length is greater than 0 else send 404
  get_both_random("Politics",res);
});


router.get('/brexit', (req, res) => {
  res.header("Content-Type",'application/json');
  get_both_random("Brexit",res);
});


router.get('/correct', (req, res) => {
  console.log(req.query.paper);
  update_newspaper_correct(req.query.paper);
});

router.get('/incorrect', (req, res) => {
  console.log(req.query.paper);
  update_newspaper_wrong(req.query.paper);
});

module.exports = router;
