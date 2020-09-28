import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalInfoAnimalPage } from './modal-info-animal.page';

const routes: Routes = [
  {
    path: '',
    component: ModalInfoAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalInfoAnimalPageRoutingModule {}
