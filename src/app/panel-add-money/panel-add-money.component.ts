import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-panel-add-money',
  templateUrl: './panel-add-money.component.html',
  styleUrls: ['./panel-add-money.component.css']
})
export class PanelAddMoneyComponent {

  @ViewChild ('moany_trasfer') updatedata!:NgForm;

  AddFund=[
    {payDay:'01/01/2023', name:'Shree Ram', contact:'876876876876', amount:'23',sanpshot:'23', comment:'Fake Customer', status:'1w' },
  ]
  
  //Update details
  moneyTrans(data:any){
    console.log(data);
    this.AddFund.push(data);
  }

  //Delete details
  delUSER(dataDel:any){
    confirm('Do you want to delete this user - '+this.AddFund[dataDel].name)
    {
      this.AddFund.splice(dataDel, 1);
    }
  }

  //Edit USER 
  EditUSER(dataEdit:any){
    console.log(this.AddFund[dataEdit].name);
    console.log(this.AddFund[dataEdit].amount);
    console.log(this.AddFund[dataEdit].contact);
    console.log(this.AddFund[dataEdit].comment);
    console.log(this.AddFund[dataEdit].payDay);
    console.log(this.AddFund[dataEdit].sanpshot);



    this.updatedata.setValue({
      name: this.AddFund[dataEdit].name,
      amount: this.AddFund[dataEdit].amount,
      contact: this.AddFund[dataEdit].contact,
      comment: this.AddFund[dataEdit].comment,
      payDay: this.AddFund[dataEdit].payDay,
      sanpshot: this.AddFund[dataEdit].sanpshot,
    })

  }


}
