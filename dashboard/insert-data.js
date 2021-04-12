
const { MongoClient } = require("mongodb");

const url = 'mongodb+srv://your_username:your_password@cluster0.qxju2.mongodb.net/Cluster0?retryWrites=true&w=majority';
const client = new MongoClient(url);

// The database to use
const dbName = "test";

async function run() {
  try{
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db(dbName);

      // Use the collection "tweets"
      const col = db.collection("tweets");

      var obj = require('./twitter_test.json');
      
      //List<BasicObject> listObject = new ArrayList<>();
      //list.add(obj);


      // Insert a single document, wait for promise so we can read it back
      const p = await col.insertMany(obj);
      // Find one document
      const myDoc = await col.findOne();
      // Print to the console
      console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  }
  finally {

    await client.close();
  }

}

run().catch(console.dir);