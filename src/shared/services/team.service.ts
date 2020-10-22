import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
 names = [
    {
      "id": "1",
      "name": "aron",
      "made": 74,
      "missed": 91,
      "points": 48,
      "percentage": 60,
      "team": 44,
      "img":"assets/aron2.jpg",
      "shirtNumber": 45
    },
    {
      "id": "2",
      "name": "itay",
      "made": 96,
      "missed": 93,
      "points": 56,
      "percentage": 11,
      "team": 38,
      "img":"assets/itay.jpg",

      "shirtNumber": 55
    },
    {
      "id": "3",
      "name": "name 3",
      "made": 19,
      "missed": 89,
      "points": 11,
      "percentage": 20,
      "team": 46,
      "shirtNumber": 100
    },
    {
      "id": "4",
      "name": "name 4",
      "made": 41,
      "missed": 34,
      "points": 20,
      "percentage": 25,
      "team": 8,
      "shirtNumber": 94
    }
  ]
  team1 = [];
  team2 = [];
  
  team1name ='';
  team2name ='';


  constructor(private router:Router) { }

  newTeam1(newPlayer){
    this.team1.push(newPlayer)

  }
  newTeam2(newPlayer){
    this.team2.push(newPlayer)

  }
  addNewPlayer(newPlayer){
    this.names.push(newPlayer)
    this.router.navigate(['main'])

  }
}

