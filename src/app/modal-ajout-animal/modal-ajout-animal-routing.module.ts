import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAjoutAnimalPage } from './modal-ajout-animal.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAjoutAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAjoutAnimalPageRoutingModule {}
