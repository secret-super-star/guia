import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-page13',
  templateUrl: './page13.page.html',
  styleUrls: ['./page13.page.scss'],
})
export class Page13Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back({animated: false});
  }

}
