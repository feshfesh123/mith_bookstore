import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';

  showHead: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private router: Router) {
  }

  ngOnInit() {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if ((event['url'] == '/login') || (event['url'] == '/register')) {
          this.showHead = false;
        } else {
          this.showHead = true;
        }

        if (event['url'].includes('/admin')){
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      }
    });
  }

  
}
