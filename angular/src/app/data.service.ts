import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private result:any;
  private REST_API_SERVER_POLITICS = "http://localhost:3000/api/politics";
  private REST_API_SERVER_BREXIT = "http://localhost:3000/api/brexit";
  private REST_API_SERVER_CLIMATE = "http://localhost:3000/api/climate";
  private REST_API_SERVER_EDUCATION = "http://localhost:3000/api/education";
  private REST_API_SERVER_UPDATE_CORRECT = "http://localhost:3000/api/correct";
  private REST_API_SERVER_UPDATE_INCORRECT = "http://localhost:3000/api/incorrect";

  constructor(private httpClient: HttpClient) { }


  public getPolitics(){
    return this.httpClient.get(this.REST_API_SERVER_POLITICS)
  }

  public getBrexit(){
      return this.httpClient.get(this.REST_API_SERVER_BREXIT)
  }

  public getClimate(){
    return this.httpClient.get(this.REST_API_SERVER_CLIMATE)
}
public getEducation(){
  return this.httpClient.get(this.REST_API_SERVER_EDUCATION)
}

  public update_paper_correct(newspaper: string){
    let params = new HttpParams();
    params = params.append('paper', newspaper);
    return this.httpClient.get(this.REST_API_SERVER_UPDATE_CORRECT,{params: params});
}
public update_paper_incorrect(newspaper: string){
    let params = new HttpParams();
    params = params.append('paper', newspaper);
    return this.httpClient.get(this.REST_API_SERVER_UPDATE_INCORRECT,{params: params});
}

public setResult(result: any){
  this.result = result;
}
public getResult(){
  return this.result;
}


}
