import { Component, OnInit, ChangeDetectorRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { TeamService } from 'src/shared/services/team.service';
import { ListService } from 'src/shared/services/list.service';
import { Game } from './game';
import { Router } from '@angular/router';
import { PlayerStats } from './playerStats';
import { Howl } from 'howler';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  
  data1:any;
  data2:any;
  stats=[]
  team1=[]
  team2=[]
  isnewGame = true
  sound

  setudio
   today = new Date().toLocaleDateString()
  
  constructor(public listService:ListService,
    public teamService :TeamService,private router:Router
    ) { }
    ngOnDestroy() {
      // destroy audio here
      if(this.sound) {
        clearInterval(this.setudio)

      }
    }
  
  ngOnInit(): void {
    // this.listService.getConfig().subscribe((result=>{
    //   this.data = result;
    //   console.log(this.data);
    // }))
    this.data1 = JSON.parse(localStorage.getItem("team1") || "[]");
    this.data2 = JSON.parse(localStorage.getItem("team2") || "[]");
    console.log(this.data1);
    // console.log(today);
   


    }
    
    
    
    sumPlayer=0;
    sumPointsPlayer=0
    sumPlayerPrece=0
    
    sumTeam1Made=0;
    sumTeam1Missed=0;
    // newGame = new Game();
  sum1All=0;
  sumTeam1Prec=0;
  sumPointsTeam1=0
  sumPointsTeam2=0
  
  
  sumTeam2Made=0;
  sumTeam2Missed=0;
  sum2All=0;
  sumTeam2Prec=0;
   startBtn = "start"
   gameStarted = false

  setAudio
  setTimer
  minuts='00'
  seconds='00';

  startStop(){
    this.gameStarted =true
      
      


    

    console.log(this.startBtn);
    let sec =0
    let min =0
    if(this.startBtn=="start"){
      // this.setudio=  setInterval(()=>{
      //   this.sound = new Howl({
      //     src: ['../../../assets/basket.mp3']
      //   });
      //   this.sound.play();

      // },1000)
      
      
      this.setTimer=setInterval(()=>{
        sec++
        sec<10? this.seconds=`0${sec}`:this.seconds= `${sec}`
        if(sec==60){
          sec =0
          sec++
          min++
          min<10? this.minuts=`0${min}`:this.minuts= `${min}`
        }
      },1000)
      this.startBtn="reset"
    }else {
      
      clearInterval(this.setTimer)
      clearInterval(this.setudio)
      this.seconds=`0${sec}`
      this.minuts=`0${min}`
      
      this.startBtn="start"


    }
  }
  
  missedBtn(player){
    var sound = new Howl({
      src: ['../../../assets/buzer.wav']
    });
    sound.play();

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
    var sound = new Howl({
      src: ['../../../assets/swishsound.wav']
    });
    
    sound.play();
    player.made++;
    player.points+=2;
    this.sumPointsPlayer=player.points;
    console.log(this.sumPointsPlayer);
    
    
    this.sumPlayer =player.missed+player.made ;
    player.percentage =Math.round( player.made / this.sumPlayer*100);
    this.sumPlayerPrece = player.percentage
    
    if(player.team==1){
      this.sumPointsTeam1+=2
      this.sumTeam1Made++;
      this.sum1All = this.sumTeam1Missed+this.sumTeam1Made;
      this.sumTeam1Prec = Math.round(this.sumTeam1Made / this.sum1All*100);
      
      
      
    }else if(player.team==2){
      this.sumPointsTeam2+=2

      this.sumTeam2Made++;
      this.sum2All = this.sumTeam2Missed+this.sumTeam2Made;
      this.sumTeam2Prec =  Math.round(this.sumTeam2Made / this.sum2All*100);
    }
    console.log(player);
    
    
    
  }
  save(){
    // this.teamService.team2.push({percentageGroup: this.sumTeam2Prec})
    // this.teamService.team1.push({percentageGroup: this.sumTeam1Prec})
    
    // this.newGame.sumpointPlayer=this.sumPointsPlayer
    // this.newGame.sum1All = this.sum1All;
    // this.newGame.sum2All =this.sum2All;
    if(this.isnewGame==true&&this.gameStarted==true){
    // this.newGame.sumPlayerPrece = this.sumPlayerPrece;
    // this.newGame.sumTeam1Prec = this.sumTeam1Prec;
    // this.newGame.sumTeam2Prec = this.sumTeam2Prec;

    //  this.teamService.games.push(this.newGame)
     const game = new Game();
     game.date = this.today;
     game.gameDuration = `${this.minuts}:${this.seconds}`;
     game.sumPointsTeam1 = this.sumPointsTeam1
     game.sumPointsTeam2 = this.sumPointsTeam2
     game.sumTeam1Prec = this.sumTeam1Prec
     game.sumTeam2Prec = this.sumTeam2Prec
     game.team1name = this.teamService.team1name
     game.team2name = this.teamService.team2name
     this.listService.createGameStats(game).subscribe(data => {
      for(let player of this.data1){
        const  playerStats =new PlayerStats()
        playerStats.made = player.made;
        playerStats.missed = player.missed;
        playerStats.name = player.name;
        playerStats.gameId = data.id;
  
        playerStats.percentage = player.percentage;
        playerStats.points = player.points;
        playerStats.teamName = this.teamService.team1name;
        this.stats.push(playerStats)
  
      }
      for(let player of this.data2){
        const  playerStats =new PlayerStats()
        playerStats.made = player.made;
        playerStats.missed = player.missed;
        playerStats.percentage = player.percentage;
        playerStats.points = player.points;
        playerStats.name = player.name;
        playerStats.gameId = data.id;

        playerStats.teamName = this.teamService.team2name;
        this.stats.push(playerStats)
  
      }
      console.log(this.stats);
      this.listService.playerStats(this.stats).subscribe(d => {
        // this.listService.playerStats$.next(data)
        console.log(data);
        this.listService.currentId =data.id

          // clearInterval(this.setAudio)
  
          this.router.navigate([`results/${data.id}`])
          
        })
        
        // this.listService.playerStats$.next(data)
        console.log(data);
        
      })
      
    }
     
     

  
    }
    newGame(){
      this.isnewGame =false 
      this.router.navigate(['main'])
      if(this.gameStarted==true)
      this.save()
     

    }
}
