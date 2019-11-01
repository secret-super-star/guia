import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-page2',
    templateUrl: './page2.page.html',
    styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

    constructor(private router: Router, private navCtrl: NavController) {
    }

    ngOnInit() {
    }

    back(){
        this.navCtrl.back();
    }

}
