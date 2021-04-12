import { Component, OnInit } from '@angular/core';

import * as mongoose from "mongoose";

@Component({
  selector: 'app-brexit',
  templateUrl: './brexit.component.html',
  styleUrls: ['./brexit.component.css']
})
export class BrexitComponent implements OnInit {


  find_random (name: any,newspaper: any, cb: any) {
    mongoose.connection.db.collection(name, function (err: any, collection: any) {
       collection.aggregate([{$match:{"paper":newspaper,"term":"Brexit"}},{$sample:{size:1}}]).toArray(cb);
   });
  }

  tweet: any;
 

  brexitPageUrl = '../../assets/brexit.jpeg';
  theSunUrl = '../../assets/theSun.png';
  theGuardianUrl = '../../assets/theGuardian.png';
  
  constructor() { }
  
  ngOnInit(): void {
    this.find_random('test_collection',"Guardian", (err: any,mdata: any) =>{
      this.tweet = mdata.text;
      console.log("mdata.text = " + this.tweet);
    });
    console.log("outside function, tweet = " + this.tweet);
  }
}
