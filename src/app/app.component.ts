import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
      url: '/page1',
      icon: 'item4.png'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
