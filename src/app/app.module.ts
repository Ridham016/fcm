import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import '@angular/compiler';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },FCM,LocalNotifications],
  bootstrap: [AppComponent],
})
export class AppModule {}
