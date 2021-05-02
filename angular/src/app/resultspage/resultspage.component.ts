import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-resultspage',
  templateUrl: './resultspage.component.html',
  styleUrls: ['./resultspage.component.css']
})
export class ResultspageComponent implements OnInit {
  
  public pieChartLabels1 = ['Correct', 'Wrong'];
  public pieChartData1 = [180, 90];
  public pieChartType1 = 'pie';
  public pieChartLabels2 = ['Correct', 'Wrong'];
  public pieChartData2 = [120, 150];
  public pieChartType2 = 'pie';
  result:any;
  backgroundUrl = '../assets/homepage.jpeg'
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.result = this.dataService.getResult();
    if(this.result == true){
      let pName1: any = this.dataService.getPaperName1;
      this.dataService.update_paper_correct(pName1);
      let pName2: any = this.dataService.getPaperName2;
      this.dataService.update_paper_correct(pName2);
      console.log(this.dataService.get_paper_stats(pName1, pName2));
      document.getElementById("answer")!.innerHTML = "Correct!!!"
    }else if(this.result == false){
      let pName1: any = this.dataService.getPaperName1;
      this.dataService.update_paper_incorrect(pName1);
      let pName2: any = this.dataService.getPaperName2;
      this.dataService.update_paper_incorrect(pName2);
      console.log(this.dataService.get_paper_stats(pName1, pName2));
      document.getElementById("answer")!.innerHTML = "Wrong"
    }
  }
}
