import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
