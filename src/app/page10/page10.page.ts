import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-page10',
  templateUrl: './page10.page.html',
  styleUrls: ['./page10.page.scss'],
})
export class Page10Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back({animated: false});
  }

}
