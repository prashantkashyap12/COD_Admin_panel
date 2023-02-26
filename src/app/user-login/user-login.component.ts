import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '../service/admin-auth.service';
import { ErrorCommitService } from '../service/error-commit.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  //USER Sign up / Sign in.

  userLogin!: FormGroup;
  //Reactive Form.

  error: boolean = false;
  errorComm = this._commitError.errorMassage;
  //Auth ERROR POP_UP 


  constructor(private _dataSign: AdminAuthService,
    private _commitError: ErrorCommitService,
    private _router: Router) { }


  ngOnInit() {
    this.userLogin = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.minLength(10)),
    })
  }

  dataLogin() {
    console.log(this.userLogin.value);
    const username = this.userLogin.value.username;
    const password = this.userLogin.value.password;

    this._dataSign.mainSignin(username, password).subscribe(
      res => {
        console.log(res);
        this._router.navigate(['admin_live_score'])
      },
      err => {
        console.log(err);
        this.error = err.error.error.message;
      })
    console.log('user Signup test2@gmail.com')
  }

  userAct() {

  }


}



