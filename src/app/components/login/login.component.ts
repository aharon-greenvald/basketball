import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Player } from 'src/app/models/playermodel';
import { AuthenticationService } from 'src/shared/services/authentication.service';
import { TeamService } from 'src/shared/services/team.service';
import { Router } from '@angular/router';
// import { TestService } from 'src/shared/services/test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  oneOfus:boolean;
  newHer:boolean;
 list
  isFormInValidLogin = false;
  isFormInValidSignin = false;
  isExists = false;
  constructor( private authentication:AuthenticationService
              ,public teamService:TeamService,
               private router:Router) { }
  ngOnInit(): void {
   
  }
  onSubmit(signinForm:NgForm){
    if(!signinForm.valid){
      this.isFormInValidLogin = true;
      this.isExists = false;
      return;

    }
    this.checkIfExists(signinForm)
    console.log(signinForm.value);
    
    
  }
  private checkIfExists(signinForm:NgForm){
    let loginData = new Player(signinForm.value.name,signinForm.value.shirtNumber)
    if(!this.authentication.authenticate(loginData)){
      this.isFormInValidLogin = false;
      this.isExists = true;

    }


  }
  checkIfOneOfUs(){
    this.oneOfus = !this.oneOfus;
    this.newHer=false

  }
  checkIfNew(){
this.newHer=!this.newHer;
this.oneOfus = false;

  }
  onSubmitSign(signinForm){
    if(signinForm.valid){
      this.teamService.addNewPlayer(signinForm.value);
      this.authentication.isAuth=true;
      this.authentication.oneOfus=false;

    }
    this.isFormInValidSignin=true


    console.log(signinForm);
   

  }
 
  
}
