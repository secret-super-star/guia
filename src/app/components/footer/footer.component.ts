import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    openconfig() {
        this.router.navigate(['/comfiguration']);
    }

    openhome() {
        this.router.navigate(['/page1']);
    }

    openpage2() {
        this.router.navigate(['/page2']);
    }

    openpage8() {
        this.router.navigate(['/page8']);
    }

}
