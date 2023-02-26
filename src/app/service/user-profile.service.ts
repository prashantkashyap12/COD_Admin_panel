import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userProfile } from '../service/response';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  // private usepro= 'https://ajay-bbdd1-default-rtdb.firebaseio.com/monthly_data2.json';
  private usepro= 'https://ajay-bbdd1-default-rtdb.firebaseio.com/users.json';

  

  constructor(private _userPro:HttpClient) { }

  // Add USER Profile
  postProfile(data:any[]){
    this._userPro.put(this.usepro, data).subscribe(res=>{
      console.log(res);
    })
  }

  // data Get
  getProfile(){
    return this._userPro.get(this.usepro);
  }

  // update Profile
  delProfile(){
    return this._userPro.delete(this.usepro)
  }


}
