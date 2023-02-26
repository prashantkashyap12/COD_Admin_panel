import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-live-gammer',
  templateUrl: './panel-live-gammer.component.html',
  styleUrls: ['./panel-live-gammer.component.css']
})
export class PanelLiveGammerComponent {
  liveGamer = [
    { date:'01/10/2010', time:'18:12', name:'Prashant kashyap', contact:'886509012', market:'Delhi', batNo:'12', amount:'24', status:'live' },
    { date:'01/10/2010', time:'18:12', name:'Prashant kashyap', contact:'886509012', market:'Delhi', batNo:'12', amount:'24', status:'live' },
    { date:'01/10/2010', time:'18:12', name:'Prashant kashyap', contact:'886509012', market:'Delhi', batNo:'12', amount:'24', status:'live' },
    { date:'01/10/2010', time:'18:12', name:'Prashant kashyap', contact:'886509012', market:'Delhi', batNo:'12', amount:'24', status:'live' },
    { date:'01/10/2010', time:'18:12', name:'Prashant kashyap', contact:'886509012', market:'Delhi', batNo:'12', amount:'24', status:'live' },
  ]

  delGamer(data:any){
    confirm('Do you want to Delete this user "'+this.liveGamer[data].date+'" record')
    {
      this.liveGamer.splice(data,1);
    }
  }


}
