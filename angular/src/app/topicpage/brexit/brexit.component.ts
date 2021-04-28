import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DataService } from 'src/app/data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-brexit',
  templateUrl: './brexit.component.html',
  styleUrls: ['./brexit.component.css']
})
export class BrexitComponent implements OnInit {

  firstQuestion = null;
  secondQuestion = null;

  popUpText = "Make sure you have filled both drop boxes";

  brexitPageUrl = '../../assets/brexit.jpeg';
  theSunUrl = '../../assets/TheSun.png';
  theGuardianUrl = '../../assets/Guardian.png';

  result: any;
  tweet: any = [];
  headline_1:String = '';
  headline_2:String = '';
  paperName_1:String = '';

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

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.retrieveData();
  }

  moveFrom1Predicate = () => {
    if (this.emptybox1.length > 0) {
      return false;
    }
    return this
  }
  moveFrom2Predicate = () => {
    if (this.emptybox2.length > 0) {
      return false;
    }
    return this
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

  public submitPredicate() {
    this.result;
    if (this.emptybox1.length != 1 || this.emptybox2.length != 1) {
        document.getElementById("popupreminder")!.innerHTML = this.popUpText;
    }else{
    const str:string = this.emptybox1[0];
    const words = str.split("/");
    const words1 = words[3].split(".");
    const paperLogo_1 = words1[0];
    if(this.paperName_1 == paperLogo_1){
      this.result = true;
    }else{
      this.result = false;
    }
    this.dataService.setResult(this.result);
    this.router.navigate(['../../resultspage']);
    }
  }

  retrieveData() {
    this.dataService.getBrexit().subscribe(
      data => {
        this.tweet=data;
        this.headline_1 = this.tweet[0].text;
        this.headline_2 = this.tweet[1].text;
        this.paperName_1 = this.tweet[0].paper;
      },
      error => {
        console.log(error);
      });
  }
}