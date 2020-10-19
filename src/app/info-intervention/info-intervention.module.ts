import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoInterventionPageRoutingModule } from './info-intervention-routing.module';

import { InfoInterventionPage } from './info-intervention.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoInterventionPageRoutingModule
  ],
  declarations: [InfoInterventionPage]
})
export class InfoInterventionPageModule {}
