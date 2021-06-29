import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng12';

  // constructor(){
  constructor(private authService: AuthService){
    const name = this.constructor.name;
    console.log(`[${new Date().toLocaleTimeString()} ${name}]: ${'test'}`);
  }
}
