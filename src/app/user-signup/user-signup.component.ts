import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminAuthService } from '../service/admin-auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})

export class UserSignupComponent {

  FormSignup! : FormGroup

  error:any = false;

  constructor(private _adminAuth:AdminAuthService){
  }

  ngOnInit(){
    this.FormSignup = new FormGroup({
      username: new FormControl('',[Validators.email, Validators.required]),
      password: new FormControl('',Validators.required)
    })
  }
  
  dataSignup(){
    console.log(this.FormSignup.value);
    const userEmail = this.FormSignup.value.username;
    const userPass = this.FormSignup.value.password;

    this._adminAuth.mainSignup(userEmail, userPass).subscribe(
      res=>{
      console.log(res);
      },
      err=>{
        console.log(err)
        this.error = err.error.error.message
      }
    )
    
  }

}    
