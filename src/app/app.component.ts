import { Component } from '@angular/core';
import { AuthenticationService } from 'src/shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basketball-team';
  constructor(public authenticationService: AuthenticationService){}

}
