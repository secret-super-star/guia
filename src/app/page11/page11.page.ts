import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-page11',
  templateUrl: './page11.page.html',
  styleUrls: ['./page11.page.scss'],
})
export class Page11Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back({animated: false});
  }

}
