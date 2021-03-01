import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/shared/services/list.service';
import { AuthenticationService } from 'src/shared/services/authentication.service';

@Component({
  selector: 'app-my-stats',
  templateUrl: './my-stats.component.html',
  styleUrls: ['./my-stats.component.css']
})
export class MyStatsComponent implements OnInit {
  dataron:any
  name='aron'


  constructor(public listService :ListService, public authentication:AuthenticationService) { }

  ngOnInit(): void {
    
    this.listService.getSinglePlayerStats(this.name)
       this.dataron =  this.listService.getSinglePlayerStats(this.name)
        this.authentication.isAuth=true
  }

}
