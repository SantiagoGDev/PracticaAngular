import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingInComponent } from './sing-in/sing-in.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, SingInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent, RegisterComponent, SingInComponent
  ]
})
export class AuthModule {

  constructor(){
    
  }
}
