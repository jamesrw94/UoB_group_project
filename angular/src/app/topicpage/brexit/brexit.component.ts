import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
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

  emptybox1 = [
  ];
  emptybox2 = [

  ];
  paperbox1 = [
    this.theSunUrl,
  ];
  paperbox2 = [
    this.theGuardianUrl,
  ];

  constructor(private dataService: DataService) { 
  }

  ngOnInit(): void {
    this.retrieveData();
  }
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
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
}
