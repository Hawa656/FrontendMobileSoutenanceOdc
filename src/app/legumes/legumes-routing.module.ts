import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegumesPage } from './legumes.page';

const routes: Routes = [
  {
    path: '',
    component: LegumesPage
  },
  // {
  //   path: 'accueil',
  //   loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegumesPageRoutingModule {}
