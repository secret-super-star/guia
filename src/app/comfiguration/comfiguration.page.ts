import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-comfiguration',
    templateUrl: './comfiguration.page.html',
    styleUrls: ['./comfiguration.page.scss'],
})
export class ComfigurationPage implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    openpage9() {
        this.router.navigate(['/page9']);
    }

    aboutus() {
        this.router.navigate(['/page10']);
    }

}
