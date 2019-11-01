import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsModule} from '../components/components.module';

import { IonicModule } from '@ionic/angular';

import { Page7Page } from './page7.page';

const routes: Routes = [
  {
    path: '',
    component: Page7Page
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
  declarations: [Page7Page]
})
export class Page7PageModule {}
