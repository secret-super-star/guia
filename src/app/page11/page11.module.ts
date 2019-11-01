import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsModule} from '../components/components.module';

import { IonicModule } from '@ionic/angular';

import { Page11Page } from './page11.page';

const routes: Routes = [
  {
    path: '',
    component: Page11Page
  }
];

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Page11Page]
})
export class Page11PageModule {}
