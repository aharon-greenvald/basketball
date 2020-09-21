import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  l ="../../../assets/aron.jpg"
list = [
  {name:'aron',made:0,missed:0},
  {name:'moti',made:35,missed:0},
  {name:'shlomo',made:23,missed:0},
  {name:'avia',made:23,missed:0},
  {name:'nisim',made:23,missed:0},
  {name:'israel',made:23,missed:0},
  {name:'yakov',made:23,missed:0},
]
a =''
  constructor() { }

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
