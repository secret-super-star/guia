import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsModule} from '../components/components.module';

import { IonicModule } from '@ionic/angular';

import { Page5Page } from './page5.page';

const routes: Routes = [
  {
    path: '',
    component: Page5Page
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
  declarations: [Page5Page]
})
export class Page5PageModule {}
