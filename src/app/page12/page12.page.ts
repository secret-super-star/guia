import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page12',
  templateUrl: './page12.page.html',
  styleUrls: ['./page12.page.scss'],
})
export class Page12Page implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back({animated: false});
  }

  openpage13(){
    this.router.navigate(['/page13']);
  }

}
