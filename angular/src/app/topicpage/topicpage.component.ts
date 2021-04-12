import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topicpage',
  templateUrl: './topicpage.component.html',
  styleUrls: ['./topicpage.component.css']
})
export class TopicPageComponent implements OnInit {
  topicPageUrl = '../../assets/homepage.jpeg';
  constructor() {
    console.log("hello from topic component");
   }

  ngOnInit(): void {
    console.log("hello from topic component");
    
  }
}