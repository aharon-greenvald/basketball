import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/shared/services/list.service';
import { AuthenticationService } from 'src/shared/services/authentication.service';

@Component({
  selector: 'app-teams-stats',
  templateUrl: './teams-stats.component.html',
  styleUrls: ['./teams-stats.component.css']
})
export class TeamsStatsComponent implements OnInit {
  data:any

  constructor(public listService :ListService,public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.data =  this.listService.getstatsGames()
    // console.log(this.listService.getstatsGames());
    
    this.authenticationService.isAuth =true


  }

}
