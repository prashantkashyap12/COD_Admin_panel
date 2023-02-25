import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';
// import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
// import { getDatabase, ref, set } from 'firebase/database';
import { getDatabase, ref, remove, set } from 'firebase/database';

import { environment } from '../../environment';

@Component({
  selector: 'app-panel-live-user',
  templateUrl: './panel-live-user.component.html',
  styleUrls: ['./panel-live-user.component.css'],
})
export class PanelLiveUserComponent {
  userData: any;
  walletAmount: any;
  constructor(private service: UserService, private toastr: ToastrService) {}
  userAction: boolean = true;
  userId: any;
  name: any;
  phoneNumber: any;
  address: any;
  password: any;
  @ViewChild('dataProfile') userForm!: NgForm;

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.service.getData().subscribe((res) => {
      console.log(res, 'usersdata');
      this.userData = Object.entries(res).map((e) => e[1]);
    });
  }

  //Add User
  Addupdate() {
    const db = getDatabase();
    set(ref(db, 'users/' + this.userId), {
      uid: this.userId,
      firstName: this.name,
      password: this.password,
      address: this.address,
      phoneNumber: this.phoneNumber,
      walletAmount: this.walletAmount,
    })
      .then(() => {
        this.userAction
          ? this.toastr.success('User Added Successfully')
          : this.toastr.success('User Updated Successfully');
        this.getUser();
        this.clearForm();
      })
      .catch((error) => {
        this.toastr.error('Error in User update');
      });
  }

  clearForm() {
    this.userId = '';
    this.name = '';
    this.password = '';
    this.address = '';
    this.phoneNumber = '';
    this.walletAmount = '';
  }

  // Edit User
  userEdit(data: any, i: number) {
    this.userAction = false;
    console.log(data, 'Edit user');
    this.userForm.setValue({
      id: data.uid || '',
      Name: data.firstName || '',
      contact: data.phoneNumber || '',
      address: data.address || '',
      password: data.password || '',
      walletAmount: data.walletAmount || '',
    });
  }

  // Delete USER
  userDel(userId: string) {
    const db = getDatabase();
    const dbRef = ref(db, 'users/' + userId);
    remove(dbRef)
      .then(() => {
        this.toastr.success('User Deleted Successfully');
        this.getUser();
      })
      .catch(() => {
        this.toastr.error('Error in User Delete');
      });
  }
}
