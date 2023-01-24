import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilPage } from './accueil.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilPage,
    
  },
  {
    path: 'fruits',
    loadChildren: () => import('../fruits/fruits.module').then( m => m.FruitsPageModule)
  },
  // {
  //   path: 'legumes',
  //   loadChildren: () => import('../legumes/legumes.module').then( m => m.LegumesPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilPageRoutingModule {}
