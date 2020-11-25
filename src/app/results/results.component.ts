import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/shared/services/team.service';
import { ListService } from 'src/shared/services/list.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
data:any
name='aron'
team =""
  constructor(public listService :ListService) { }

  ngOnInit(): void {
    this.listService.playerStats$.subscribe( data => {
      this.data = data
    }) 

    this.listService.getSinglePlayerStats(this.name).subscribe((result=>{
      // this.data = result;
      this.listService.playerStats$.next(result)
      console.log(this.data)  

       
    }))

    

}
}
