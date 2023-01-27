import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./connexion1/connexion1.module').then( m => m.Connexion1PageModule)
    //loadChildren: () => import('./details-conseil/details-conseil.module').then( m => m.DetailsConseilPageModule)
    //loadChildren: () => import('./alerte2/alerte2.module').then( m => m.Alerte2PageModule)
  //loadChildren: () => import('./alerte1/alerte1.module').then( m => m.Alerte1PageModule)
    //loadChildren: () => import('./legume-fruit/legume-fruit.module').then( m => m.LegumeFruitPageModule)
    //loadChildren: () => import('./conseils/conseils.module').then( m => m.ConseilsPageModule)
    // loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
    //loadChildren: () => import('./legumes/legumes.module').then( m => m.LegumesPageModule)
    //loadChildren: () => import('./fruits/fruits.module').then( m => m.FruitsPageModule)
    // loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
    //loadChildren: () => import('./tab-bar/tab-bar.module').then( m => m.TabBarPageModule)
    //loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
     //loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    redirectTo:'connexion1',
    pathMatch:'full'
  },
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1PageModule)
  },
  // {
  //   path: 'connexion',
  //   loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./tab-bar/tab-bar.module').then( m => m.TabBarPageModule)
  },
  {
    path: 'legume-fruit',
    loadChildren: () => import('./legume-fruit/legume-fruit.module').then( m => m.LegumeFruitPageModule)
  },
  {
    path: 'alerte1',
    loadChildren: () => import('./alerte1/alerte1.module').then( m => m.Alerte1PageModule)
  },
  {
    path: 'alerte2',
    loadChildren: () => import('./alerte2/alerte2.module').then( m => m.Alerte2PageModule)
  },
  {
    path: 'details-conseil',
    loadChildren: () => import('./details-conseil/details-conseil.module').then( m => m.DetailsConseilPageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then( m => m.ForumPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'verification-otp',
    loadChildren: () => import('./verification-otp/verification-otp.module').then( m => m.VerificationOTPPageModule)
  },
  {
    path: 'connexion1',
    loadChildren: () => import('./connexion1/connexion1.module').then( m => m.Connexion1PageModule)
  },
  // {
  //   path: 'fruits',
  //   loadChildren: () => import('./fruits/fruits.module').then( m => m.FruitsPageModule)
  // },
   {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  // {
  //   path: 'legumes',
  //   loadChildren: () => import('./legumes/legumes.module').then( m => m.LegumesPageModule)
  // },
  // {
  //   path: 'videos',
  //   loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  // },
  // {
  //   path: 'conseils',
  //   loadChildren: () => import('./conseils/conseils.module').then( m => m.ConseilsPageModule)
  // },
  // {
  //   path: 'profil',
  //   loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
