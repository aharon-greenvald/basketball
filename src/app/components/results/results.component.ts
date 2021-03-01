import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/shared/services/team.service';
import { ListService } from 'src/shared/services/list.service';
import { AuthenticationService } from 'src/shared/services/authentication.service';
import { Howl } from 'howler';
import { Router } from '@angular/router';
    // swishsound.wav


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  allGames:any
  data: any
  dataGame: any
  dataron: any
  name = 'aron'
  team = ""
  aronclicked = false;
  curentId: any;
  listToDisplay:any = []
  listToDisplayTeamOne:any = []
  listToDisplayTeamTow:any = []
  whoWin =''
  counter=0
  t1w=0
  t2w=0
  allPoints1=0
  allPoints2=0

  avaraget1 =0
  avaraget2 =0

  constructor(public listService: ListService, 
    public authenticationService: AuthenticationService,
    public teamService :TeamService,
    private router:Router) { }
 sound
  ngOnInit(): void {
     this.listService.getstatsGames().subscribe(games=>{
      this.allGames =games
      console.log( this.allGames);
      

      for(let game of this.allGames){
        console.log(game.sumPointsTeam1);
        if(game.team1name==this.teamService.team1name||game.team1name==this.teamService.team2name){
          this.allPoints1+=game.sumPointsTeam1
          this.allPoints2+=game.sumPointsTeam2
          console.log(this.allPoints1);
          this.counter++
          console.log(this.counter);
          this.avaraget1 =  Math.round(this.allPoints1/ this.counter)
          this.avaraget2=  Math.round(this.allPoints2/ this.counter)


          if(game.sumPointsTeam1>game.sumPointsTeam2){
            this.t1w++
          }else if(game.sumPointsTeam1<game.sumPointsTeam2){
            this.t2w++
          }


        }

          
          

      }
    })
    

    this.listService.getstatsPlayers().subscribe( data => {
      this.data = data
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].gameId == this.listService.currentId) {
        this.listToDisplay.push(this.data[i])
        console.log('hgfjhfjhgfjhg',this.listToDisplay);
        }
      }
      for (let i = 0; i < this.listToDisplay.length; i++) {
        console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',this.listToDisplay);
        
      
          if (i < 3) {
            this.listToDisplayTeamOne.push(this.listToDisplay[i])
          }
          else {
            this.listToDisplayTeamTow.push(this.listToDisplay[i])

          }
        
      }

    })
    this.curentId = this.listService.currentId;
    console.log('idddddddddddd', this.curentId);

    
    
  
     this.listService.getCurrentGame(this.listService.currentId)

    .subscribe( result => {
    this.dataGame = result;
    console.log(this.dataGame);
    for(let g of this.dataGame){
      if( g.sumPointsTeam1>g.sumPointsTeam2){
        this.whoWin = `${g.team1name} won ${g.sumPointsTeam1} -${g.sumPointsTeam2} `


      }else{
        this.whoWin = `${g.team2name} won ${g.sumPointsTeam2} - ${g.sumPointsTeam1} `

      }
    }
    
    
             }) 

    this.dataron = this.listService.getSinglePlayerStats(this.name)
    this.authenticationService.isAuth = true
    this.authenticationService.oneOfus = true

    let j= setTimeout(()=>{
       this.sound = new Howl({
        src: ['../../../assets/q.mp3']
      });
      this.sound.play();
    }

  ,1000)
   
  }
  ngOnDestroy() {
    // destroy audio here
    if(this.sound) {
      this.sound.pause();
      this.sound = null;
    }
  }
  newGame(){
    this.router.navigate(['main'])

  }
  
}
 
  

