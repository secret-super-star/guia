import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsModule} from '../components/components.module';

import { IonicModule } from '@ionic/angular';

import { Page8Page } from './page8.page';

const routes: Routes = [
  {
    path: '',
    component: Page8Page
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
  declarations: [Page8Page]
})
export class Page8PageModule {}
