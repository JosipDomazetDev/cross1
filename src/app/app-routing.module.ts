import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LogModalPage} from "./log-modal/log-modal.page";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'hometab',
    loadChildren: () => import('./hometab/hometab.module').then( m => m.HometabPageModule)
  },
  {
    path: 'maptab',
    loadChildren: () => import('./maptab/maptab.module').then( m => m.MaptabPageModule)
  },
  {
    path: 'profiletab',
    loadChildren: () => import('./profiletab/profiletab.module').then( m => m.ProfiletabPageModule)
  },
  {
    path: 'abouttab',
    loadChildren: () => import('./abouttab/abouttab.module').then( m => m.AbouttabPageModule)
  },
  {
    path: 'logs',
    component: LogModalPage
  },
  {
    path: 'log-modal',
    loadChildren: () => import('./log-modal/log-modal.module').then( m => m.LogModalPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

