import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-resultspage',
  templateUrl: './resultspage.component.html',
  styleUrls: ['./resultspage.component.css']
})
export class ResultspageComponent implements OnInit {
  result:any;
  backgroundUrl = '../assets/homepage.jpeg'
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.result = this.dataService.getResult();
    if(this.result == true){
      document.getElementById("answer")!.innerHTML = "Correct!!!"
    }else{
      document.getElementById("answer")!.innerHTML = "Wrong"
    }
  }

}
