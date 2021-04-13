import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brexit',
  templateUrl: './brexit.component.html',
  styleUrls: ['./brexit.component.css']
})
export class BrexitComponent implements OnInit {
  brexitPageUrl = '../../assets/brexit.jpeg';
  theSunUrl = '../../assets/theSun.png';
  theGuardianUrl = '../../assets/theGuardian.png';
  items = [
    'Item 1',
    'Item 2',
  ]
  
  constructor() { }
  
  ngOnInit(): void {

  }
}
