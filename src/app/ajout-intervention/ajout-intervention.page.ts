import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { DataService } from "../service/data.service";

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-ajout-intervention',
  templateUrl: './ajout-intervention.page.html',
  styleUrls: ['./ajout-intervention.page.scss'],
})
export class AjoutInterventionPage implements OnInit {

  public typeInter: any;
  public nouvInter: any;

  public idAnimal: string;

  public URLApi: string = 'http://127.0.0.1/api-veto/api_select_typeInter.php';

  constructor(private router: Router, private dataService: DataService, private httpClient: HttpClient) {

    this.nouvInter = new Array<Object>();
    this.typeInter = new Array<Object>();


    this.idAnimal = this.dataService.getIdAnimal();
  }

  ngOnInit() {
    this.httpClient.get(this.URLApi).subscribe(
      resultat => {
        console.log(resultat);
        this.typeInter = resultat;
      },
      erreur => {
        console.log('Erreur' + erreur);
      }
    );
  }

  ajouterInter() {

    
    console.log('id'+this.idAnimal);

    this.httpClient.get("http://127.0.0.1/api-veto/api_insert_uneInter.php?idAnimal="+ this.idAnimal +"&type=" + this.nouvInter.type + "&date=" + this.nouvInter.date + "&duree=" + this.nouvInter.duree).subscribe(
      resultat => {
        console.log(resultat);
      },
      erreur => {
        console.log('Erreur' + erreur);
      }
    );
  }

  returnTab2() {
    this.dataService.setIdAnimal('0');
    this.router.navigateByUrl('tabs/tab2');
  }
}
