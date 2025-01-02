import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService) { }

  async login() {
    try {
      await this.authService.signIn(this.email, this.password);
      // Handle successful login
    } catch (error) {
      // Handle login error
    }
  }
}
