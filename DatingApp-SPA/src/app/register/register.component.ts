import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_Services/auth.service';
import { AlertifyService } from '../_Services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) {}

  ngOnInit(): void {}

  register() {
    this.authService.register(this.model).subscribe(
      (next) => {
        this.alertify.success('registration successfully');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.message('cancel event');
  }
}
