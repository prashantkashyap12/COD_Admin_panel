import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DailyResultsService } from '../service/daily-results.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-panel-live-score',
  templateUrl: './panel-live-score.component.html',
  styleUrls: ['./panel-live-score.component.css']
})
export class PanelLiveScoreComponent {

  dataEditTemp:any;
  
  editMode:boolean=false;

  @ViewChild ('dataval1') editMarket!:NgForm;


  constructor(private _indexData:DailyResultsService, private _mainURL:HttpClient){}

  datadb:any=[
    {Add_market1:'Market_DEMO', Add_value1:'00', Add_date1:'12/02/1990', Add_time1:'16:01' },
  ]

  // Get API
  ngOnInit(){
    this._indexData.dataGET().subscribe(res=>{
      this.datadb = res;
    })
    
  }



  
  //Delete Funcation
  dataDEL(data:any){
    if(confirm('Do You want to delete this product')){      
      this.datadb.splice(data,1)
      this._indexData.dataPUT(this.datadb);
    }
  }


  datadis_index1(data:any){
    console.log(data);
    this.datadb.push(data);
    this._indexData.dataPUT(this.datadb)
  }
  datadis_update(dataup:any){
    this._mainURL.put('https://ajay-bbdd1-default-rtdb.firebaseio.com/Live_result/'+this.dataEditTemp+'.json',
    dataup).subscribe(res=>{
    })
  }






  // PUT API
  // datadis_index1(data:any){
  //   if(this.editMarket.valid){
  //     if(this.editMode){
  //       this._mainURL.put('https://ajay-bbdd1-default-rtdb.firebaseio.com/daily_result.json'+this.dataEditTemp+'.json', data).subscribe(res=>{
  //     })
  //   }
  //   else{
  //     console.log(data);
  //     this.datadb.push(data);
  //     this._indexData.dataPUT(this.datadb);
  //     }
  //   }
  //   else{
  //     let key = Object.keys(this.editMarket.control);
  //   }
  // }
  // datadis_update(dataval1:any){
  //   console.log(dataval1);
  // }

  // Update program value
  dataEDIT(data1:any){
    this.editMode=true;
    console.log(this.datadb[data1]);
    this.dataEditTemp = data1;
    this.editMarket.setValue({
      Add_market1: this.datadb[data1].Add_market1,
      Add_value1: this.datadb[data1].Add_value1,
      Add_date1: this.datadb[data1].Add_date1,
      Add_time1: this.datadb[data1].Add_time1
    })
  }
}
