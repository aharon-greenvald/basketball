import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  newUser='';
 names = [
  {
    "id": "1",
    "name": "aron",
    "made": 39,
    "missed": 28,
    "points": 12,
    "percentage": 67,
    "team": 41,
    "shirtNumber": 84,
    "position": "position 1",
    "img": "assets/aron.png",
    "imgball":'assets/aronball.png',

    "height": 68
  },
  {
    "id": "2",
    "name": "shlomo",
    "made": 32,
    "missed": 14,
    "points": 64,
    "percentage": 54,
    "team": 12,
    "shirtNumber": 28,
    "position": "position 2",
    "img": "assets/shlomo.png",
    "imgball":'assets/shlomoball.png',

    "height": 6
  },
  {
    "id": "3",
    "name": "israel",
    "made": 80,
    "missed": 57,
    "points": 51,
    "percentage": 15,
    "team": 78,
    "shirtNumber": 8,
    "position": "position 3",
    "img": "assets/israel.png",
    "imgball":'assets/israelball.png',
    "height": 53
  },
  {
    "id": "4",
    "name": "evyatar",
    "made": 70,
    "missed": 100,
    "points": 86,
    "percentage": 5,
    "team": 38,
    "shirtNumber": 35,
    "position": "position 4",
    "img": "assets/evyatar.png",
    "imgball":'assets/evyatarball.png',

    "height": 92
  },
  {
    "id": "5",
    "name": "evia",
    "made": 90,
    "missed": 79,
    "points": 15,
    "percentage": 59,
    "team": 29,
    "shirtNumber": 64,
    "position": "position 5",
    "img": "assets/evia.png",
    "imgball":'assets/eviaball.png',

    "height": 31
  },
  {
    "id": "6",
    "name": "moti",
    "made": 74,
    "missed": 76,
    "points": 100,
    "percentage": 88,
    "team": 2,
    "shirtNumber": 78,
    "position": "position 6",
    "img": "assets/moti.png",
    "imgball":'assets/motiball.png',

    "height": 93
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
    this.newUser = newPlayer.name;
    this.names.push(newPlayer)
    this.router.navigate(['main'])

  }
}

