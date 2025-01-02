import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService) { }

  async register() {
    try {
      await this.authService.signUp(this.email, this.password);
      // Handle successful registration
    } catch (error) {
      // Handle registration error
    }
  }
}
