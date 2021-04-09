import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-topicpage',
  templateUrl: './topicpage.component.html',
  styleUrls: ['./topicpage.component.css']
})
export class TopicPageComponent implements OnInit {
  topicPageUrl = '../../assets/homepage.jpeg';
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
}
