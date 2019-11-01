import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages = [
        {
            title: 'Inicio',
            url: '/page1',
            icon: 'item1.png'
        },
        {
            title: 'Cidades',
            url: '/page2',
            icon: 'item2.png'
        },
        {
            title: 'Favouritos',
            url: '/page1',
            icon: 'item3.png'
        },
        {
            title: 'configuracoes',
            url: '/comfiguration',
            icon: 'item4.png'
        },
        {
            title: 'Page7',
            url: '/page7',
            icon: 'item4.png'
        },
        {
            title: 'Page8',
            url: '/page8',
            icon: 'item4.png'
        },
        {
            title: 'Page9',
            url: '/page9',
            icon: 'item4.png'
        },
        {
            title: 'Page10(About Us)',
            url: '/page10',
            icon: 'item4.png'
        },
        {
            title: 'Page11',
            url: '/page11',
            icon: 'item4.png'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
