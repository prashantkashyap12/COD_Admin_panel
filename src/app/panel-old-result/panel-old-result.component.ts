import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { map } from 'rxjs';
import { OldResultService } from '../service/old-result.service'; 

// import { FormControl } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-panel-old-result',
  templateUrl: './panel-old-result.component.html',
  styleUrls: ['./panel-old-result.component.css']
})
export class PanelOldResultComponent {

  // myFormControl = new FormControl('initial value');
  
  constructor(private _result:OldResultService, private _liveedit:HttpClient){}

  @ViewChild ('datamaster') dataMaain!:NgForm;

  editMode:boolean=false;

  tempDataId:any;

  // mainData:any;
    mainData = [
      { month:"jan", year:"2020", A1:"41", A2:"49", A3:"78", A4:"86", A5:"68", A6:"82", A7:"49", A8:"95", A9:"78", A10:"57", 
        A11:"00", A12:"02", A13:"00",A14:"00",A15:"09",A16:"00", A17:"00", A18:"00", A19:"00", A20:"00", A21:"00", A22:"00",
        A23:"00", A24:"12", A25:"12", A26:"00", A27:"90", A28:"12", A29:"00", A30:"00"}
    ];


  // GET API Mathord
  ngOnInit(){
    this._result.getData().subscribe(res=>{
      console.log(res);
      this.mainData = res;
    })
    // this._result.getData()
    //   .pipe(map(dataMap=>{
    //     console.log(dataMap);
    //     const userArray:any = [];
    //     for(const key in dataMap){
    //       console.log( dataMap[key]);
    //       if(dataMap.hasOwnProperty(key)){
    //         userArray.push({mainID:key, ...dataMap[key]}) 
    //       }
    //     }
    //     return userArray;
    //   }))

    // .subscribe(res=>{
    // this.mainData = res;
    // })
  }

  // Delete API 
  dataDel(userId:any){
    if(confirm("Do you want to delete this product "+userId)){
      console.log(userId);
      this.mainData.splice(userId,1);
      this._result.postData(this.mainData);
    }
  }

  

  // PUT API
    datasub(data:any){
    if(this.dataMaain.valid){
      if(this.editMode){
        
        console.log('https://ajay-bbdd1-default-rtdb.firebaseio.com/monthly_data/'+this.tempDataId+'.json');
        
        this._liveedit.put('https://ajay-bbdd1-default-rtdb.firebaseio.com/monthly_data/'+this.tempDataId+'.json', data).subscribe(res=>{ 
        })

      }
    else{
      console.log(data);
      this.mainData.push(data);
      this._result.postData(this.mainData);
      }
    }
  else{
      let key = Object.keys(this.dataMaain.control);
    }
  }



  //Edit Data
  dataEdit(i:any){
    this.editMode=true;
    this.tempDataId = i;
    console.log(this.mainData[i]);
    this.dataMaain.setValue({
      year: this.mainData[i].year,
      month: this.mainData[i].month,
      A1: this.mainData[i].A1,
      A2: this.mainData[i].A2,
      A3: this.mainData[i].A3,
      A4: this.mainData[i].A4,
      A5: this.mainData[i].A5,
      A6: this.mainData[i].A6,
      A7: this.mainData[i].A7,
      A8: this.mainData[i].A8,
      A9: this.mainData[i].A9,
      A10: this.mainData[i].A10,
      A11: this.mainData[i].A11,
      A12: this.mainData[i].A12,
      A13: this.mainData[i].A13,
      A14: this.mainData[i].A14,
      A15: this.mainData[i].A15,
      A16: this.mainData[i].A16,
      A17: this.mainData[i].A17,
      A18: this.mainData[i].A18,
      A19: this.mainData[i].A19,
      A20: this.mainData[i].A20,
      A21: this.mainData[i].A21,
      A22: this.mainData[i].A22,
      A23: this.mainData[i].A23,
      A24: this.mainData[i].A24,
      A25: this.mainData[i].A25,
      A26: this.mainData[i].A26,
      A27: this.mainData[i].A27,
      A28: this.mainData[i].A28,
      A29: this.mainData[i].A29,
      A30: this.mainData[i].A30,      
    })
  }
  

  
  // Without API
  condiyear:any = "2022";
  condimonth:any = "Feb";
  // condimaster:any;  
  getyear(year:any){
    this.condiyear = year;
  }

  getmonth(month:any){
    this.condimonth = month;
  }
  
  



}
 