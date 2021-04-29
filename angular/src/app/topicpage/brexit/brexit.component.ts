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

  paper_image_dict = {DailyMailUK:'',
                      FT:'',
                      Guardian:'../../assets/theGuardian.png',
                      Telegraph:'',
                      TheSun:'../../assets/theSun.png'};

  paper_url1 ='../../assets/theGuardian.png';
  paper_url2='../../assets/theGuardian.png';

  test:any = [];
  tweet: any = [];
  headline_1:String = '';
  headline_2:String = '';

  emptybox1 = [
  ];
  emptybox2 = [

  ];
  paperbox1:string [] = [
    this.paper_url1
  ];
  paperbox2:string[] = [
      this.paper_url2
  ];

  constructor(private dataService: DataService) {

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

  retrieveData() {
    this.dataService.getBrexit().subscribe(
      data => {
        this.tweet=data;
        this.headline_1 = this.tweet[0].text;
        this.headline_2 = this.tweet[1].text;
        this.paper_url1  = this.paper_image_dict['TheSun'];
        this.paper_url2 = this.paper_image_dict['Guardian'];
    
        // const paper1_picture = document.getElementById("paperimage1")
        // if (paper1_picture != null){
        //     paper1_picture.setAttribute( 'src',this.paper_url1);
        //
        // }
        // const paper2_picture = document.getElementById("paperimage2")
        // if (paper2_picture != null){
        //     paper2_picture.setAttribute( 'src',this.paper_url2);
        // }

      },
      error => {
        console.log(error);
      });

      this.dataService.get_paper_stats('Guardian','TheSun').subscribe(
          data=>{

              this.test = data;
              console.log(this.test[0].paper);
              console.log(this.test[1].paper);

          },error=>{
              console.log(error);
          }
      )
  }


}
