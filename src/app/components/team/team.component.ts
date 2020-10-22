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
 
   sumPlayer=0;
   
   sumTeam1Made=0;
   sumTeam1Missed=0;
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
    player.percentage = player.made / this.sumPlayer*100;
    if(player.team==1){
      this.sumTeam1Missed++;
      this.sum1All = this.sumTeam1Missed+this.sumTeam1Made;
      this.sumTeam1Prec = this.sumTeam1Made / this.sum1All*100;
  

    }else if(player.team==2){
      this.sumTeam2Missed++;
      this.sum2All = this.sumTeam2Missed+this.sumTeam2Made;
      this.sumTeam2Prec = this.sumTeam2Made / this.sum2All*100;
  }


    
  }
  madeBtn(player){
    console.log(player);
    player.made++;
    player.points+=2;
    this.sumPlayer =player.missed+player.made ;
    player.percentage = player.made / this.sumPlayer*100;
    if(player.team==1){
      this.sumTeam1Made++;
      this.sum1All = this.sumTeam1Missed+this.sumTeam1Made;
      this.sumTeam1Prec = this.sumTeam1Made / this.sum1All*100;
    
  

    }else if(player.team==2){
      this.sumTeam2Made++;
      this.sum2All = this.sumTeam2Missed+this.sumTeam2Made;
      this.sumTeam2Prec = this.sumTeam2Made / this.sum2All*100;
  }
  

  }}
