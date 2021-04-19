import { Component, OnInit } from '@angular/core';
import {CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-brexit',
  templateUrl: './brexit.component.html',
  styleUrls: ['./brexit.component.css']
})
export class BrexitComponent implements OnInit {
  brexitPageUrl = '../../assets/brexit.jpeg';
  theSunUrl = '../../assets/theSun.png';
  theGuardianUrl = '../../assets/theGuardian.png';

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
  
  drop(event: CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else{
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  moveFrom1Predicate() {
      console.log(this.paperbox1.length)
      return true;
  }
  moveFrom2Predicate() {
      return true;
  }

  constructor() { }
  
  ngOnInit(): void {
  }
}
