import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modal-ajout-client',
    loadChildren: () => import('./modal-ajout-client/modal-ajout-client.module').then( m => m.ModalAjoutClientPageModule)
  },
  {
    path: 'modal-ajout-animal',
    loadChildren: () => import('./modal-ajout-animal/modal-ajout-animal.module').then( m => m.ModalAjoutAnimalPageModule)
  },
  {
    path: 'modal-info-animal',
    loadChildren: () => import('./modal-info-animal/modal-info-animal.module').then( m => m.ModalInfoAnimalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
