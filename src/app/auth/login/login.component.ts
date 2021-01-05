import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  singIn:boolean = true;
  register:boolean = false;

  constructor() {}

  ngOnInit(): void {}


  showSingIn(){
  	this.singIn = true;
  	this.register = false;
  }

  showRegister(){
    this.singIn = !true;
  	this.register = !false;
  }

}
