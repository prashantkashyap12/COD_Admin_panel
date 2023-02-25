import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-forget',
  templateUrl: './user-forget.component.html',
  styleUrls: ['./user-forget.component.css']
})
export class UserForgetComponent {

  error:boolean = true;

  userLogin!:FormGroup


  dataForget(){
    
  }

}
