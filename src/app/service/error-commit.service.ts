import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorCommitService {

  constructor() { }


  //ERROR Object
  errorMassage = {
    // UNKNOWN:'A Known Error Occurred',
    EMAIL_EXISTS: 'This Email id is already Exists' ,
    EMAIL_NOT_FOUND:'there is no email to find this profile, make Register first' 
  }


}
