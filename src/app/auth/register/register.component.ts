import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 	

  registerForm: FormGroup;
  constructor(private _builder: FormBuilder ) {

    this.registerForm = this._builder.group({
  	  name:['',Validators.required],
      email: ['',Validators.compose([Validators.email,Validators.required]) ],
      password: ['',Validators.required],
      vpassword:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  sendData(value:any){
   console.log(value)
   this.registerForm.reset();
  }

  isValidCampo(form,campo){

  	if(campo === 'password' || campo === 'name'){
  		if(form.get(campo).hasError('required') ){
  			return true
  		}
  	}
  	
  	if(form.get(campo).hasError(campo) ){
  	 return true;
  	}
  }


}
