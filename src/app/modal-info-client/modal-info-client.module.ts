import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalInfoClientPageRoutingModule } from './modal-info-client-routing.module';

import { ModalInfoClientPage } from './modal-info-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInfoClientPageRoutingModule
  ],
  declarations: [ModalInfoClientPage]
})
export class ModalInfoClientPageModule {}
