import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/shared/services/team.service';
import { ListService } from 'src/shared/services/list.service';
import { Game } from './game';
import { Router } from '@angular/router';
import { PlayerStats } from './playerStats';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  data:any;
  stats=[]
  
  
  constructor(public listService:ListService,public teamService :TeamService,private router:Router ) { }
  
  ngOnInit(): void {
    // this.listService.getConfig().subscribe((result=>{
      //   this.data = result;
      //   console.log(this.data);
      // }))
      // this.teamService.team1=[]
      // this.teamService.team2=[]
      console.log(this.teamService.games);
      
    }
    
    sumPlayer=0;
    sumPointsPlayer=0
    sumPlayerPrece=0
    
    sumTeam1Made=0;
    sumTeam1Missed=0;
    // newGame = new Game();
  sum1All=0;
  sumTeam1Prec=0;
  
  
  sumTeam2Made=0;
  sumTeam2Missed=0;
  sum2All=0;
  sumTeam2Prec=0;
  
  
  missedBtn(player){
    console.log(player);
    player.missed++;
    this.sumPlayer =player.missed+player.made ;
    player.percentage = Math.round(player.made / this.sumPlayer*100)
    this.sumPlayerPrece = player.percentage
    
    if(player.team==1){
      this.sumTeam1Missed++;
      this.sum1All = this.sumTeam1Missed+this.sumTeam1Made;
      this.sumTeam1Prec = Math.round(this.sumTeam1Made / this.sum1All*100);
      
      
    }else if(player.team==2){
      this.sumTeam2Missed++;
      this.sum2All = this.sumTeam2Missed+this.sumTeam2Made;
      this.sumTeam2Prec = Math.round(this.sumTeam2Made / this.sum2All*100);
    }
    
    
    
  }
  madeBtn(player){
    player.made++;
    player.points+=2;
    this.sumPointsPlayer=player.points;
    console.log(this.sumPointsPlayer);
    

    this.sumPlayer =player.missed+player.made ;
    player.percentage =Math.round( player.made / this.sumPlayer*100);
    this.sumPlayerPrece = player.percentage

    if(player.team==1){
      this.sumTeam1Made++;
      this.sum1All = this.sumTeam1Missed+this.sumTeam1Made;
      this.sumTeam1Prec = Math.round(this.sumTeam1Made / this.sum1All*100);
      
      
      
    }else if(player.team==2){
      this.sumTeam2Made++;
      this.sum2All = this.sumTeam2Missed+this.sumTeam2Made;
      this.sumTeam2Prec =  Math.round(this.sumTeam2Made / this.sum2All*100);
    }
    console.log(player);
    
    
    
  }
  save(){
    // this.teamService.team2.push({percentageGroup: this.sumTeam2Prec})
    // this.teamService.team1.push({percentageGroup: this.sumTeam1Prec})
    for(let player of this.teamService.team1){
      const  playerStats =new PlayerStats()
      playerStats.made = player.made;
      playerStats.missed = player.missed;
      playerStats.name = player.name;

      playerStats.percentage = player.percentage;
      playerStats.points = player.points;
      playerStats.teamName = this.teamService.team1name;
      this.stats.push(playerStats)

    }
    for(let player of this.teamService.team2){
      const  playerStats =new PlayerStats()
      playerStats.made = player.made;
      playerStats.missed = player.missed;
      playerStats.percentage = player.percentage;
      playerStats.points = player.points;
      playerStats.name = player.name;
      playerStats.teamName = this.teamService.team2name;
      this.stats.push(playerStats)

    }
    console.log(this.stats);
    this.listService.playerStats(this.stats).subscribe(data => {
      this.listService.playerStats$.next(data)
      console.log(data);
      
    })
    
    // this.newGame.sumpointPlayer=this.sumPointsPlayer
    // this.newGame.sum1All = this.sum1All;
    // this.newGame.sum2All =this.sum2All;
    // this.newGame.sumPlayerPrece = this.sumPlayerPrece;
    // this.newGame.sumTeam1Prec = this.sumTeam1Prec;
    // this.newGame.sumTeam2Prec = this.sumTeam2Prec;

    //  this.teamService.games.push(this.newGame)
     
     
     this.router.navigate(['results'])

  
    }
    newGame(){
      this.teamService.team1=[]
      this.teamService.team2=[]
         
 this.teamService.team1name ='';
 this.teamService.team2name ='';
      this.router.navigate(['main'])

    }
}
