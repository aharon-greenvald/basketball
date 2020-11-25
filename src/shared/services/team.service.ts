import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  newUser='';
  names = [
    {
      "name": "aron",
      "made": 0,
      "missed": 0,
      "points": 0,
      "percentage": 0,
      "team": 0,
      "shirtNumber": 23,
      "position": "position 1",
      "img": "assets/aron.png",
      "imgball":'assets/aronball.png',
  
      "height": 0
    },
    {
      "name": "shlomo",
      "made": 0,
      "missed": 0,
      "points": 0,
      "percentage": 0,
      "team": 0,
      "shirtNumber": 28,
      "position": "position 2",
      "img": "assets/shlomo.png",
      "imgball":'assets/shlomoball.png',
  
      "height": 6
    },
    {
      "name": "israel",
      "made": 0,
      "missed": 0,
      "points": 0,
      "percentage": 0,
      "team": 0,
      "shirtNumber": 16,
      "position": "position 3",
      "img": "assets/israel.png",
      "imgball":'assets/israelball.png',
      "height": 53
    },
    {
      "name": "evyatar",
      "made": 0,
      "missed": 0,
      "points": 0,
      "percentage": 0,
      "team": 0,
      "shirtNumber": 8,
      "position": "position 4",
      "img": "assets/evyatar.png",
      "imgball":'assets/evyatarball.png',
  
      "height": 92
    },
    {
      "name": "evia",
      "made": 0,
      "missed": 0,
      "points": 0,
      "percentage": 0,
      "team": 0,
      "shirtNumber": 6,
      "position": "position 5",
      "img": "assets/evia.png",
      "imgball":'assets/eviaball.png',
  
      "height": 31
    },
    {
      "name": "moti",
      "made": 0,
      "missed": 0,
      "points": 0,
      "percentage": 0,
      "team": 0,
      "shirtNumber": 17,
      "position": "position 6",
      "img": "assets/moti.png",
      "imgball":'assets/motiball.png',
  
      "height": 93
    }
  ]
  team1 = [];
  team2 = [];
  games =[];
  
  team1name ='';
  team2name ='';


  constructor(private router:Router) { }

  // newTeam1(newPlayer){
  //   this.team1.push(newPlayer)

  // }
  // newTeam2(newPlayer){
  //   this.team2.push(newPlayer)

  // }
  addNewPlayer(newPlayer){
    this.newUser = newPlayer.name;
    // this.names.push(newPlayer)
    this.router.navigate(['main'])

  }
}

