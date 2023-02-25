import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminAuth } from './config';
import { userAuthVal } from './response';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private _AdminAuth:HttpClient) { }

  mainSignupURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
  mainSigninURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
  
  mainSignup(user:any, vpwd:any){
    return this._AdminAuth.post<userAuthVal>(this.mainSignupURL+AdminAuth.Sign_API,{
      email:user,
      password:vpwd,
      returnSecureToken:true,
    })
  }
  
  mainSignin(user:any, password:any){
    return this._AdminAuth.post<userAuthVal>(this.mainSigninURL+AdminAuth.Sign_API,{
      email:user,
      password:password,
      returnSecureToken:true
    })
  }



}
