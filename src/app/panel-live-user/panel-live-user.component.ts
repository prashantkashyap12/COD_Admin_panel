import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserProfileService } from '../service/user-profile.service';



@Component({
  selector: 'app-panel-live-user',
  templateUrl: './panel-live-user.component.html',
  styleUrls: ['./panel-live-user.component.css']
})
export class PanelLiveUserComponent {
 
  dataMap:any

  userAction:boolean=true;

  @ViewChild ('dataProfile') userForm!:NgForm;

  constructor(private _userProData:UserProfileService){}


  private usepro= 'https://ajay-bbdd1-default-rtdb.firebaseio.com/users.json';


  profileData = [
    {id:'101', Name: 'Prashant Kashyap', contact:'N/A', address:'N/A', Paymentinfo:'N/A', password:'1234567890'},
    {id:'101', Name: 'Shivani Kashyap', contact:'N/A', address:'N/A', Paymentinfo:'N/A', password:'1234567890'}
    
  ]



  ngOnInit(){
    this._userProData.getProfile().subscribe(res=>{
      console.log(res);
    })
  }




  //Add User
  Addupdate(profile:any){
    console.log(profile);
    this.profileData.push(profile);
    this._userProData.postProfile(this.profileData);
  }


   
  // Edit User
    userEdi(data:any){
    this.userAction=false;
    console.log(this.profileData[data]);
    this.userForm.setValue({
      id: this.profileData[data].id,
      Name: this.profileData[data].Name,
      contact: this.profileData[data].contact,
      address: this.profileData[data].address,
      Paymentinfo: this.profileData[data].Paymentinfo,
      password: this.profileData[data].password
    })
  }

    // Delete USER
    userDel(data:any){
    confirm("Do You want to permanently Delete = " + this.profileData[data].Name)
    {
      this.profileData.splice(data,1);
      
    }
  }
}
