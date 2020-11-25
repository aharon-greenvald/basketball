import { Injectable } from '@angular/core';
// import list from '../../shared/list.json'
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  playerStats$ = new Subject() 

  
  urlp = 'http://localhost:1000/players'
  urls = 'http://localhost:1000/stats'

  constructor(private http: HttpClient) { }


  getConfig() {
    return this.http.get(this.urlp);
  }
  getstatsPlayers() {
    return this.http.get(this.urls);
  }
  getSinglePlayerStats(name){
    return this.http.get(`${this.urls}/${name}`);

  }

playerStats(game){
  console.log('gggggggggaaaaaaammmmmmmmmeeeee',game);
  
  return this.http.post<any>(this.urls, {playerStats:game})
}



}
