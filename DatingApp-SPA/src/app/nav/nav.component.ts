import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_Services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Input() title: any;
  model: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        console.log('Logged in successfully');
      },
      (error) => {
        console.error('Failed to login');
      }
    );
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout() {
    localStorage.removeItem('token');
  }
}