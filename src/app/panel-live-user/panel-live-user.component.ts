import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-panel-live-user',
  templateUrl: './panel-live-user.component.html',
  styleUrls: ['./panel-live-user.component.css']
})
export class PanelLiveUserComponent {

  userAction:boolean=true;

  @ViewChild ('dataProfile') userForm!:NgForm;

  profileData = [
    {id:'101', Name: 'Prashant Kashyap', contact:'8865080562', address:'Agra', password:'1234567890'},
    {id:'102', Name: 'Shivani Kashyap', contact:'8865080562', address:'Agra', password:'1234567890'},
    {id:'103', Name: 'Prashant Kashyap', contact:'8865080562', address:'Agra', password:'1234567890'},
    {id:'104', Name: 'Shiani Kashyap', contact:'8865080562', address:'Agra', password:'1234567890'},
    {id:'105', Name: 'Prashant Kashyap', contact:'8865080562', address:'Agra', password:'1234567890'}
  ]

  //Add User
  Addupdate(profile:any){
    console.log(profile);
    this.profileData.push(profile);
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
      password: this.profileData[data].password
    })

  }

  // Delete USER
  userDel(data:any){
    confirm("Do You want to permanently Delete = " + this.profileData[data].Name)
    {
      console.log();

    }
    
  }



}
