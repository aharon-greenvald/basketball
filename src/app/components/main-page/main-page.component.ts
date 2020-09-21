import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/shared/services/list.service';
import { TeamService } from 'src/shared/services/team.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  l ="../../../assets/aron.jpg"

a =''
  constructor(public listService:ListService,public teamService:TeamService ) { }

  ngOnInit(): void {
    console.log(this.listService.mylist.length);
    
  }
  addCounter(player){
    player.made++
    console.log(player);
    
  }
  missesCounter(player){
    player.missed++
    console.log(player);
    
  }
  addPlayer(obj){
    if(this.teamService.team1.length<3){
      this.teamService.newTeam1(obj)
      console.log(obj);
    }else if(this.teamService.team2.length<3){
      this.teamService.newTeam2(obj)
      console.log(obj);
    }

   
    

  }

}
