import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutInterventionPage } from './ajout-intervention.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutInterventionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutInterventionPageRoutingModule {}
