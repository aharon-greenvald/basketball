import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/shared/services/list.service';
import { TeamService } from 'src/shared/services/team.service';
import { AuthenticationService } from 'src/shared/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
 data:any;
 like= true
  constructor(public teamService:TeamService,public listService:ListService,
    public authenticationService:AuthenticationService,
    private router:Router ) { }
  userName 
  newUser
  acronyms1 =''
  acronyms2 =''
  // iskliked=true;
  ngOnInit(){
    this.listService.getConfig().subscribe((result=>{
      this.data = result;
      console.log(this.data);
      // if(!this.authentication.oneOfus){
      //   this.authentication.isAuth=false
      // }
    }))
    this.authenticationService.isAuth =true
    this.teamService.team1=[]
    this.teamService.team2=[]
       
this.teamService.team1name ='';
this.teamService.team2name ='';

    // this.data= this.teamService.names;
    console.log(this.data);
    // this.userName= this.teamService.newUser;
    this.userName= this.authenticationService.userName;
    
    console.log(this.authenticationService.isAuth);
    
    
    
  }
  donotlike(){
    // this.like = false
    for(let player of this.data){
      player.team=0
    }
    console.log(this.teamService.team1name);
    
    this.teamService.team1=[]
    this.teamService.team2=[]
    this.acronyms1=''
    this.acronyms2=''
    this.teamService.team1name ='';
    this.teamService.team2name ='';

    
 console.log(this.teamService.team2name);
 console.log(this.teamService.team1name);


    this.like = true
  }
  addCounter(player){
    player.made++
    
  }
  missesCounter(player){
    player.missed++
    
  }
  
  addPlayer(player){
  
    
   

    if(this.teamService.team1.length<3){
      player.team=1;
       this.acronyms1 += player.name.charAt(0)
       
      this.teamService.team1name = this.acronyms1.split('').sort().join('').toUpperCase();
      player.teamName = this.teamService.team1name
      
      
      this.teamService.team1.push(player);

    }else if(this.teamService.team2.length<3){
      
      for(let player of this.data){
        if(player.team!=1){

          player.team=2;
          this.acronyms2 += player.name.charAt(0)       
          this.teamService.team2name = this.acronyms2.split('').sort().join('').toUpperCase();
          
          player.teamName = this.teamService.team2name
                    console.log(this.teamService.team2);
          this.teamService.team2.push(player);
        }
        for(let player of this.data){
          if(player.team==1){
            player.teamName = this.teamService.team1name
            
            localStorage.setItem('team1', JSON.stringify (this.teamService.team1))
            
          }
          else{
            player.teamName = this.teamService.team2name
            localStorage.setItem('team2', JSON.stringify (this.teamService.team2))

          }
        }

  
      }
     


      // this.teamService.team2.push(player);

    }
  }
  iLike(){
    console.log(this.teamService.team1.length);
    
    if(this.teamService.team1.length==3&&this.teamService.team2.length==3){

      this.router.navigate(['team'])
    }

  }

}
