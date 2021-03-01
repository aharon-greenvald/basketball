import { Injectable } from '@angular/core';
// import list from '../../shared/list.json'
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { PlayerStats } from 'src/app/components/team/playerStats';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  playerStats$ = new Subject() 
  currentId

  
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

playerStats(plstats){
  console.log('gggggggggaaaaaaammmmmmmmmeeeee',plstats);
  
  return this.http.post<any>(this.urls, {playerStats:plstats})
}
createGameStats(game){
  console.log('gggggggggaaaaaaammmmmmmmmeeeee',game);
  
  return this.http.post<any>(`${this.urls}/game`, {game})
}

getCurrentGame(id) {
  return this.http.get(`${this.urls}/game/${id}`);
}


getstatsGames() {
  return this.http.get(`${this.urls}/game`);
}
}
