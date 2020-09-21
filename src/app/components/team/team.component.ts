import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/shared/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(public teamService :TeamService ) { }

  ngOnInit(): void {
  }
  addCounter(player){
    player.made++
    console.log(player);
    
  }
  missesCounter(player){
    player.missed++
    console.log(player);
    
  }
  

}
