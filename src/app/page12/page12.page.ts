import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-page12',
  templateUrl: './page12.page.html',
  styleUrls: ['./page12.page.scss'],
})
export class Page12Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back({animated: false});
  }

}
