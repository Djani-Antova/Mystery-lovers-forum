import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/features/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private userService: UserService, private router: Router) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged
  }
  get username(): string {
    return this.userService.user?.username || '';
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/'])
  }

}
