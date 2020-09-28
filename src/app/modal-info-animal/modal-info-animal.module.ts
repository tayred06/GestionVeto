import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalInfoAnimalPageRoutingModule } from './modal-info-animal-routing.module';

import { ModalInfoAnimalPage } from './modal-info-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInfoAnimalPageRoutingModule
  ],
  declarations: [ModalInfoAnimalPage]
})
export class ModalInfoAnimalPageModule {}
