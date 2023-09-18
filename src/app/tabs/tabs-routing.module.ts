import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'hometab',
        loadChildren: () => import('../hometab/hometab.module').then(m => m.HometabPageModule)
      },
      {
        path: 'maptab',
        loadChildren: () => import('../maptab/maptab.module').then(m => m.MaptabPageModule)
      },
      {
        path: 'profiletab',
        loadChildren: () => import('../profiletab/profiletab.module').then(m => m.ProfiletabPageModule)
      },
      {
        path: 'abouttab',
        loadChildren: () => import('../abouttab/abouttab.module').then(m => m.AbouttabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/hometab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/hometab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
