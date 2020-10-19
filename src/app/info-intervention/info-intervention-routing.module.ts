import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoInterventionPage } from './info-intervention.page';

const routes: Routes = [
  {
    path: '',
    component: InfoInterventionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoInterventionPageRoutingModule {}
