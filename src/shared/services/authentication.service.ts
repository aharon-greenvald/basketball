import { Injectable } from '@angular/core';
import { Player } from 'src/app/models/playermodel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuth = false;
 exisistPlayer = new Player('aron',23);
  constructor() { }

  authenticate(player:Player){
    if(player.name==this.exisistPlayer.name&&
      player.shirtNumber==this.exisistPlayer.shirtNumber){
      this.isAuth=true;
      console.log("wellcom");
      
    }
    
  }
}
