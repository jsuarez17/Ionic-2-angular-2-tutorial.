import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  me: Me = {
    img: '../../assets/img/avatar.jpg',
    nick_name: '@g_sus17',
    interactions: 1,
    github: "g_sus17",
    twitter: "g_sus17",
    medium: "g_sus17",
    bio: "Jesus Suarez es Google Developer Expert en Angular y Tecnologías Web. Organizador de ngbaires. Director de tecnologias en JavaScript es especialista en Angular y Firebase. Tambien da cursos, charlas y escribe articulos tecnicos."
  }

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

interface Me {
  img: string;
  nick_name: string;
  interactions: number;
  github: string;
  twitter: string;
  medium: string;
  bio: string;
}

interface Notifications {
  img: string;
  nick_name: string;
  text: string;
  action: string;
}