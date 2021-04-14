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
  
  constructor(private dataService: DataService) { 

  }

  retrieveData() {
    this.dataService.getAll().subscribe(
      data => {
        // need this instead to return a tweet. maybe i need to amend the data service method with find_random...
        // this.stats = data;
        // now let's update the fields
        // this.radarChartLabels = this.stats.radarChartLabels;
        // this.radarChartData = this.stats.radarChartData;
      },
      error => {
        console.log(error);
      });
  }
  
  ngOnInit(): void {
    console.log("hello from brexit component");
  }
}
