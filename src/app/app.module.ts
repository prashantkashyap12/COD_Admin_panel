import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PanelAddMoneyComponent } from './panel-add-money/panel-add-money.component';
import { PanelLiveGammerComponent } from './panel-live-gammer/panel-live-gammer.component';
import { PanelLiveScoreComponent } from './panel-live-score/panel-live-score.component';
import { PanelLiveUserComponent } from './panel-live-user/panel-live-user.component';
import { PanelOldResultComponent } from './panel-old-result/panel-old-result.component';
import { PanelTransferMoneyComponent } from './panel-transfer-money/panel-transfer-money.component';
import { PanelRootComponent } from './panel-root/panel-root.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserForgetComponent } from './user-forget/user-forget.component';




@NgModule({
  declarations: [
    AppComponent,
    PanelAddMoneyComponent,
    PanelLiveGammerComponent,
    PanelLiveScoreComponent,
    PanelLiveUserComponent,
    PanelOldResultComponent,
    PanelTransferMoneyComponent,
    PanelRootComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserForgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    AppComponent,
    PanelAddMoneyComponent,
    PanelLiveGammerComponent,
    PanelLiveScoreComponent,
    PanelLiveUserComponent,
    PanelOldResultComponent,
    PanelTransferMoneyComponent,
    PanelRootComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
