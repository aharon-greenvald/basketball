import { Injectable } from '@angular/core';
import { Player } from 'src/app/models/playermodel';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 

  isAuth = false;
 exisistPlayer = new Player('aron',23);
  constructor(private router:Router) { }

  authenticate(player:Player):boolean {
    if(player.name==this.exisistPlayer.name&&
      player.shirtNumber==this.exisistPlayer.shirtNumber){
      this.isAuth=true;
      this.router.navigate(['main'])
      console.log("wellcom");
      return true
    }
    
  }
  logout(){
    this.isAuth=false;
    console.log('uyuyu');
    
    this.router.navigate([''])
  }
}
