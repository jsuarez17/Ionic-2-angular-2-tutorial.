import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  listado: twitt[] = [
    {
      img: '../../assets/img/avatar.jpg',
      nick_name: '@g_sus17',
      text: 'platzitter es lo mas'
    },
    {
      img: '../../assets/img/avatar.jpg',
      nick_name: '@g_sus17',
      text: 'que chulo que esta esta app en iOS'
    },
    {
      img: '../../assets/img/avatar.jpg',
      nick_name: '@g_sus17',
      text: 'test 1234'
    }
  ]

  constructor(public navCtrl: NavController) {

  }

}

interface twitt {
  img: string;
  nick_name: string;
  text:string;
}