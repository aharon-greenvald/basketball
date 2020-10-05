import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/shared/services/list.service';
import { TeamService } from 'src/shared/services/team.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
 data:any;
  constructor(public listService:ListService,public teamService:TeamService ) { }

  ngOnInit(){
    this.listService.getConfig().subscribe((result=>{
      this.data = result;

    }))
    
    
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
