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

  tweet: any = [];
  headline_1:String = '';
  headline_2:String = '';

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
        this.tweet=data;
        this.headline_1 = this.tweet[0].text;
        this.headline_2 = this.tweet[1].text;

      },
      error => {
        console.log(error);
      });
  }
}
