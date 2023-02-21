import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  main:any=[
    {name:"test", password:"123456"}
  ]
  getlogin(data:any){
    console.log(data.value);
  }


  
}
