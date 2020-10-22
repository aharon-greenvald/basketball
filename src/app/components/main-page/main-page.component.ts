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
    // this.listService.getConfig().subscribe((result=>{
    //   this.data = result;

    // }))
    this.data= this.teamService.names;
    console.log(this.data);
    
    
    
  }
  addCounter(player){
    player.made++
    console.log(player);
    
  }
  missesCounter(player){
    player.missed++
    console.log(player);
    
  }
  
  addPlayer(player){
   

    if(this.teamService.team1.length<3){
      player.team=1;
      this.teamService.team1name+= player.name.charAt(0);
      console.log(this.teamService.team1name);
      console.log(player);
      
      this.teamService.team1.push(player);
    }else if(this.teamService.team2.length<3){
      player.team=2;
      this.teamService.team2name+= player.name.charAt(0);


      this.teamService.team2.push(player);

    }
  }

}
