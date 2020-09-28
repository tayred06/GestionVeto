import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAjoutAnimalPageRoutingModule } from './modal-ajout-animal-routing.module';

import { ModalAjoutAnimalPage } from './modal-ajout-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAjoutAnimalPageRoutingModule
  ],
  declarations: [ModalAjoutAnimalPage]
})
export class ModalAjoutAnimalPageModule {}
