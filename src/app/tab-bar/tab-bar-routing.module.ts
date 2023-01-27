import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBarPage } from './tab-bar.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabBarPage,
    children:[
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)
      },
      {
           path: 'legumes',
           loadChildren: () => import('../legumes/legumes.module').then( m => m.LegumesPageModule)
         },
      {
        path: 'fruits',
        loadChildren: () => import('../fruits/fruits.module').then( m => m.FruitsPageModule)
      },
      {
        path: 'forum',
        loadChildren: () => import('../forum/forum.module').then( m => m.ForumPageModule)
      },
      {
        path: '',
        redirectTo: './accueil.page',
        pathMatch: 'full'
      }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBarPageRoutingModule {}
