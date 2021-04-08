import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topicpage',
  templateUrl: './topicpage.component.html',
  styleUrls: ['./topicpage.component.css']
})
export class TopicpageComponent implements OnInit {
  topicPageUrl = '../../assets/homepage.jpeg';
  constructor() { }

  ngOnInit(): void {
    
  }

}
