import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAjoutClientPage } from './modal-ajout-client.page';

import { Geolocation } from "@ionic-native/geolocation/ngx";

const routes: Routes = [
  {
    path: '',
    component: ModalAjoutClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [Geolocation]
})
export class ModalAjoutClientPageRoutingModule {}
