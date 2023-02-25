import { Component, NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { PanelAddMoneyComponent } from './panel-add-money/panel-add-money.component';
import { PanelLiveGammerComponent } from './panel-live-gammer/panel-live-gammer.component';
import { PanelLiveScoreComponent } from './panel-live-score/panel-live-score.component';
import { PanelLiveUserComponent } from './panel-live-user/panel-live-user.component';
import { PanelOldResultComponent } from './panel-old-result/panel-old-result.component';
import { PanelTransferMoneyComponent } from './panel-transfer-money/panel-transfer-money.component';
import { UserForgetComponent } from './user-forget/user-forget.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

import { PanelRootComponent } from './panel-root/panel-root.component';
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'admin_live_score', component:PanelLiveScoreComponent},
  {path:'admin_old_result', component:PanelOldResultComponent},
  {path:'admin_live_user', component:PanelLiveUserComponent},
  {path:'admin_Live_Gammer', component: PanelLiveGammerComponent},
  {path:'admin_add_money', component:PanelAddMoneyComponent },
  {path:'admin_trans_money', component:PanelTransferMoneyComponent},
  {path:'admin_trans_money', component:PanelTransferMoneyComponent},
  {path:'admin_trans_money', component:PanelTransferMoneyComponent},
  {path:'Deshboard', component:PanelRootComponent},
  {path:'login', component:UserLoginComponent},
  {path:'signup', component:UserSignupComponent},
  {path:'forget', component:UserForgetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
