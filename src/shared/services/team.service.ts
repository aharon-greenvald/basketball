import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  team1 = [];
  team2 = [];

  constructor() { }

  newTeam1(newPlayer){
    this.team1.push(newPlayer)

  }
  newTeam2(newPlayer){
    this.team2.push(newPlayer)

  }
}
