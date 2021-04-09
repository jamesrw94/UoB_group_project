import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brexit',
  templateUrl: './brexit.component.html',
  styleUrls: ['./brexit.component.css']
})
export class BrexitComponent implements OnInit {
  brexitPageUrl = '../../assets/brexit.jpeg';
  constructor() { }

  ngOnInit(): void {
  }

}
