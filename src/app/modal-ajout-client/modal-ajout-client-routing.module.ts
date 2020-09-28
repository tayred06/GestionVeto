import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAjoutClientPage } from './modal-ajout-client.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAjoutClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAjoutClientPageRoutingModule {}
