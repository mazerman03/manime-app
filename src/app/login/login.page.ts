import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) { }

  onLogin() {
    console.log('Login', this.email, this.password);
    this.navCtrl.navigateForward('/home'); 
  }
}
