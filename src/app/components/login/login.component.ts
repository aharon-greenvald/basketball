import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Player } from 'src/app/models/playermodel';
import { AuthenticationService } from 'src/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authentication:AuthenticationService) { }

  ngOnInit(): void {
    
  }
  onSubmit(signinForm:NgForm){
    let loginData = new Player(signinForm.value.name,signinForm.value.shirtNumber)
    this.authentication.authenticate(loginData)
    console.log(signinForm.value);
    

  }
}
