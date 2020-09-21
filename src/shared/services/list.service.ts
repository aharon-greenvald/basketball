import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  list = [
    {name:'aron',made:0,missed:0},
    {name:'moti',made:35,missed:0},
    {name:'shlomo',made:23,missed:0},
    {name:'avia',made:23,missed:0},
    {name:'nisim',made:23,missed:0},
    {name:'israel',made:23,missed:0},
    {name:'yakov',made:23,missed:0},
  ]
  constructor() { }
}
