import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  async login() {
    try {
      const user = await this.apiService.login(this.username, this.password);
      // Guardar la sesión del usuario
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/home'], { state: { user } });
    } catch (error) {
      console.error('Login failed', error);
    }
  }
}
