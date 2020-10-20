import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Geolocation } from "@ionic-native/geolocation/ngx";

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
  providers: [Geolocation]
})
export class ModalInfoClientPageRoutingModule {}
