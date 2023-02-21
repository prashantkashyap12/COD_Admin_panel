import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DailyResultsService {

  private mainURL = "https://testauthangular-fbaee-default-rtdb.firebaseio.com/daily_result.json"
  constructor(private _results:HttpClient) { }


  dataPUT(data:any[]){
    return this._results.put(this.mainURL,data).subscribe(res=>{
      console.log(res); 
    });
  }

  dataGET(){
    return this._results.get(this.mainURL);
  }





}
