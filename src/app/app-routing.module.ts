import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./conseils/conseils.module').then( m => m.ConseilsPageModule)
    //loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
    //loadChildren: () => import('./legumes/legumes.module').then( m => m.LegumesPageModule)
    //loadChildren: () => import('./fruits/fruits.module').then( m => m.FruitsPageModule)
    //loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
    //loadChildren: () => import('./tab-bar/tab-bar.module').then( m => m.TabBarPageModule)

     //loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'tab-bar',
    loadChildren: () => import('./tab-bar/tab-bar.module').then( m => m.TabBarPageModule)
  },
  {
    path: 'fruits',
    loadChildren: () => import('./fruits/fruits.module').then( m => m.FruitsPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'legumes',
    loadChildren: () => import('./legumes/legumes.module').then( m => m.LegumesPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'conseils',
    loadChildren: () => import('./conseils/conseils.module').then( m => m.ConseilsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
