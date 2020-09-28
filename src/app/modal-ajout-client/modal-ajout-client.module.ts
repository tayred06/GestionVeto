import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAjoutClientPageRoutingModule } from './modal-ajout-client-routing.module';

import { ModalAjoutClientPage } from './modal-ajout-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAjoutClientPageRoutingModule
  ],
  declarations: [ModalAjoutClientPage]
})
export class ModalAjoutClientPageModule {}
