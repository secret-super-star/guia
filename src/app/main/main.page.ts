import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
    userName: any = [];

    constructor(
        private menuCtrl: MenuController,
        private router: Router
    ) {
        this.menuCtrl.enable(false, 'main_menu');
    }

    ngOnInit() {
    }

    signin() {
        this.router.navigate(['/page1']);
    }

}
