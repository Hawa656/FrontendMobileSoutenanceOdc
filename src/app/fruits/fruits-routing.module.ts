import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FruitsPage } from './fruits.page';

const routes: Routes = [
  {
    path: '',
    component: FruitsPage,
    
  },
  {
    path: 'accueil',
    loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitsPageRoutingModule {}
