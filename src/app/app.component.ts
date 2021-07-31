import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public menuToggle: boolean = false
  private subscription: Subscription

  constructor(private loginService: LoginService, private router: Router) {

    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url !== '/login') {        
        this.menuToggle = true;
      }
    });
  }

  validAuth(): void {
    this.menuToggle = this.loginService.validAuth();
  }
}
