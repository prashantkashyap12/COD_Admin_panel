import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OldResultService {
  
  private posturl = 'https://testauthangular-fbaee-default-rtdb.firebaseio.com/monthly_data.json';

private header = new HttpHeaders({'Content-Type':'COD-APP/JSON'})
  constructor(private _OldResultdata:HttpClient) {  }  

  // PUT API
  postData(datapost:any[]){
  //  this._OldResultdata.put(this.posturl, datapost, {headers : this.header}).subscribe(data=>{
  //   console.log(data);
  //  })

  this._OldResultdata.put(this.posturl,datapost).subscribe(res=>{
    console.log(res);
  })
  }

  // Get API
  getData():Observable<any> {
    return this._OldResultdata.get(this.posturl);
  }

  // DEL API
  dataDelmain(UserId:any){
   return this._OldResultdata.delete(this.posturl);
  }


}
