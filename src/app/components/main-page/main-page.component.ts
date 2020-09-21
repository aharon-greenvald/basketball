import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/shared/services/list.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  l ="../../../assets/aron.jpg"

a =''
  constructor(private srv:ListService) { }

  ngOnInit(): void {
  }
  addCounter(player){
    player.made++
    console.log(player);
    
  }
  missesCounter(player){
    player.missed++
    console.log(player);
    
  }

}
