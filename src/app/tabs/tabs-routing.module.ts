import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'page1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../page1/page1.module').then(m => m.Page1PageModule)
          }
        ]
      },
      {
        path: 'page2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../page2/page2.module').then(m => m.Page2PageModule)
          }
        ]
      },
      {
        path: 'page3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../page3/page3.module').then(m => m.Page3PageModule)
          }
        ]
      },
      {
        path: 'page4',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../page4/page4.module').then(m => m.Page4PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/page1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/page1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
