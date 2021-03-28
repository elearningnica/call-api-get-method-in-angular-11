import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly apiURL = "https://jsonplaceholder.typicode.com";

  constructor(private http:HttpClient) { }

  getPostList():Observable<any[]> {
    return this.http.get<any>(this.apiURL + '/posts');
  }
}
