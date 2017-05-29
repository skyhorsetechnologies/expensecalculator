import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData) { }

  onLogin(form: NgForm) {
  
    this.submitted = true;
	//this.userData.login(this.login.username);
	//alert(form.valid);
      //this.navCtrl.push(HomePage);
    if (form.valid) {
    
    
    	if(this.login.username == 'admin' && this.login.password == 'admin'){
    	this.userData.login(this.login.username);
      this.navCtrl.push(HomePage);
    	}
    	else{
    	alert('Incorrect Credentials');
    	}
    
      
    }
  }

}
