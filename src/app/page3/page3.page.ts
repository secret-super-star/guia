import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
    selector: 'app-page3',
    templateUrl: './page3.page.html',
    styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

    slideOpts = {
        initialSlide: 1,
        speed: 400
    };

    constructor(private navCtrl: NavController, private router: Router) {
    }

    ngOnInit() {
    }

    back() {
      this.navCtrl.back();
    }

    viewmore(){
        this.router.navigate(['/page4']);
    }
}
