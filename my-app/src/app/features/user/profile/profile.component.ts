import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username = 'John Doe';
  email = 'john.doe@gmail.com';
  avatarUrl = '../../../assets/user-icon.png'; 
}
