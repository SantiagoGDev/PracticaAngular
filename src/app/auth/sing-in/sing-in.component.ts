import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _builder: FormBuilder ) {

    this.loginForm = this._builder.group({
      email: ['',Validators.compose([Validators.email,Validators.required]) ],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  sendData(value:any){
   console.log(value)
   this.loginForm.reset();
  }

  isValidCampo(form,campo){

  	if(campo === 'password'){
  		if(form.get(campo).hasError('required') ){
  			return true
  		}
  	}
  	
  	if(form.get(campo).hasError(campo) ){
  	 return true;
  	}
  }
}
