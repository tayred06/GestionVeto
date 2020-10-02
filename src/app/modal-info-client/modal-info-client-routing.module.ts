import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalInfoClientPage } from './modal-info-client.page';

const routes: Routes = [
  {
    path: '',
    component: ModalInfoClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalInfoClientPageRoutingModule {}
