import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutInterventionPageRoutingModule } from './ajout-intervention-routing.module';

import { AjoutInterventionPage } from './ajout-intervention.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutInterventionPageRoutingModule
  ],
  declarations: [AjoutInterventionPage]
})
export class AjoutInterventionPageModule {}
