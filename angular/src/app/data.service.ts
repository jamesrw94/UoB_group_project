import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER_POLITICS = "http://localhost:3000/api/politics";
  private REST_API_SERVER_BREXIT = "http://localhost:3000/api/brexit";

  constructor(private httpClient: HttpClient) { }

  public getPolitics(){
    return this.httpClient.get(this.REST_API_SERVER_POLITICS)
  }

  public getBrexit(){
      return this.httpClient.get(this.REST_API_SERVER_BREXIT)
  }
}
