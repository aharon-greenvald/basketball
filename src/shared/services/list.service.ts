import { Injectable } from '@angular/core';
// import list from '../../shared/list.json'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  url = 'assets/list.json'
  

  constructor(private http: HttpClient) { }


  getConfig() {
    return this.http.get(this.url);
  }





}
