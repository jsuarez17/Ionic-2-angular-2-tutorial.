import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})

export class NotificationPage {

  notifications: Notifications[] = [
    {
      action: 'reply',
      img: '../../assets/img/avatar.jpg', 
      nick_name: '@g_sus17', 
      text: 'platzitter es lo mas'
    },
    {
      action: 'replatzitt',
      img: '../../assets/img/avatar.jpg', nick_name: '@g_sus17', text: 'que chulo que esta esta app en iOS'
    },
    {
      action: 'mention',
      img: '../../assets/img/avatar.jpg', nick_name: '@g_sus17', text: 'test 1234'
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}


interface Notifications {
  img: string;
  nick_name: string;
  text: string;
  action: string;
}