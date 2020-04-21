import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_Services/auth.service';
import { AlertifyService } from '../_Services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Input() title: any;
  model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService) {}

  ngOnInit(): void {}
  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertify.success('Logged in successfully');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }
  loggedIn() {
    return this.authService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }
}
