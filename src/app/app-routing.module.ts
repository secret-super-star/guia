import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page1',
    pathMatch: 'full'
  },
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then(m => m.Page1PageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then(m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./page3/page3.module').then(m => m.Page3PageModule)
  },
  {
    path: 'page4',
    loadChildren: () => import('./page4/page4.module').then(m => m.Page4PageModule)
  },
  {
    path: 'page5',
    loadChildren: () => import('./page5/page5.module').then(m => m.Page5PageModule)
  },
  { path: 'comfiguration', loadChildren: './comfiguration/comfiguration.module#ComfigurationPageModule' },
  { path: 'page6', loadChildren: './page6/page6.module#Page6PageModule' },
  { path: 'page7', loadChildren: './page7/page7.module#Page7PageModule' },
  { path: 'page8', loadChildren: './page8/page8.module#Page8PageModule' },
  { path: 'page9', loadChildren: './page9/page9.module#Page9PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
