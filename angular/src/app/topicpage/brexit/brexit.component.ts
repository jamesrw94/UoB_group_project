import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-brexit',
  templateUrl: './brexit.component.html',
  styleUrls: ['./brexit.component.css']
})
export class BrexitComponent implements OnInit {

  firstQuestion = null;
  secondQuestion = null;

  brexitPageUrl = '../../assets/brexit.jpeg';
  theSunUrl = '../../assets/theSun.png';
  theGuardianUrl = '../../assets/theGuardian.png';

  stats: any = [];
  currentdata:String = '';
  
  constructor(private dataService: DataService) { 
  }

  retrieveData() {
    this.dataService.getBrexit().subscribe(
      data => {
        this.stats=data;
        this.currentdata = this.stats.text;
      },
      error => {
        console.log(error);
      });
  }
  
  ngOnInit(): void {
    this.retrieveData();
  }
}
