import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/shared/services/authentication.service';
import { ListService } from 'src/shared/services/list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
data:any
  constructor(public authenticationService: AuthenticationService,public listService:ListService) { }

  ngOnInit(): void {
    this.listService.getConfig().subscribe((result=>{
      this.data = result;
      console.log(this.data);
    }))
  }

  logout(){
    this.authenticationService.logout();
  }
}
