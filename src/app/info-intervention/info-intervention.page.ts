import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { ViewWillEnter } from '@ionic/angular';

import { Router } from "@angular/router";
import { DataService } from "../service/data.service";

@Component({
  selector: 'app-info-intervention',
  templateUrl: './info-intervention.page.html',
  styleUrls: ['./info-intervention.page.scss'],
})
export class InfoInterventionPage implements ViewWillEnter {

  public id: string;
  public uneInter: any;

  constructor(private httpClient: HttpClient, private dataService: DataService, private router: Router) {

    this.uneInter = new Array<Object>();

  }

  ionViewWillEnter() {
    this.id = this.dataService.getIdInter();
    console.log(this.id);
    this.httpClient.get('http://127.0.0.1/api-veto/api_select_uneInter.php?recherche=' + this.id).subscribe(
      resultat => {
        this.uneInter = resultat;
      },
      erreur => {
        console.log('Erreur ' + erreur);
      }
    );
  }

  retourAnimal() {
    this.router.navigateByUrl('modal-info-animal');
  }

}
