import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  email: string = '';

  constructor(private navCtrl: NavController) { }

  onSignup() {
    console.log('Signup', this.email);
    this.navCtrl.navigateForward('/home');
  }
}
