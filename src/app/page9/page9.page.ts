import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
    selector: 'app-page9',
    templateUrl: './page9.page.html',
    styleUrls: ['./page9.page.scss'],
})
export class Page9Page implements OnInit {

    constructor(private navCtrl: NavController) {
    }

    ngOnInit() {
    }

    back() {
      this.navCtrl.back({animated: false});
    }

}
