import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  hasPermission: boolean=true;
 token: string='';
  list: any;

  constructor( private fcm:FCM,private plt :Platform,private localNotifications:LocalNotifications) {
this.plt.ready().then(_=>{
  this.fcm.getToken().then(token=>{
    console.log(token);
    this.token=token;
  });


    this.fcm.onNotification().subscribe(data => {
      console.log(data);
      this.list=data;
      if (data.wasTapped) {
        this.localNotifications.schedule({

          trigger: { at: new Date(new Date().getTime() + 5000) },
          led: 'FF0000',
        });
      } else {
        this.localNotifications.schedule({
          title: this.list.title,
          text: this.list.text,
          trigger: { at: new Date(new Date().getTime() + 5000) },
          led: 'FF0000',
        });
      }

  });
  this.fcm.onTokenRefresh().subscribe(token => {
    console.log(token);
  });
})
  }

async ngOnInit() {

}
}
