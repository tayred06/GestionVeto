import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Client } from "../model/client";
import { ViewWillEnter } from '@ionic/angular';

import { ModalController } from '@ionic/angular';
import { ModalAjoutAnimalPage } from '../modal-ajout-animal/modal-ajout-animal.page';
import { ModalInfoAnimalPage } from "../modal-info-animal/modal-info-animal.page";

import { DataService } from "../service/data.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-modal-info-client',
  templateUrl: './modal-info-client.page.html',
  styleUrls: ['./modal-info-client.page.scss'],
})
export class ModalInfoClientPage implements ViewWillEnter {

  private id: string;

  public idPropio: string;

  public unClient: any;
  public animaux: any;
  // public urlApi: string = 'http://127.0.0.1/api-veto/api_select_unClient.php?recherche=' + this.id;

  constructor(private router: Router, private dataService: DataService ,private httpClient: HttpClient, private modalController: ModalController) {

    this.unClient = new Array<Client>();
    this.animaux = new Array<Object>();

  }

  ionViewWillEnter() {
    this.id = this.dataService.getIdClient();
    console.log(this.id);
    this.idPropio = this.id;
    this.httpClient.get('http://127.0.0.1/api-veto/api_select_unClient.php?recherche=' + this.id).subscribe(
      resultat => {
        //console.log('unClient' + resultat);
        this.unClient = resultat;
      },
      erreur => {
        console.log('Erreur' + erreur);
      }
    );
    this.httpClient.get('http://127.0.0.1/api-veto/api_select_animalByClient.php?recherche=' + this.id).subscribe(
      resultat => {
        console.log('Animaux' + resultat);
        this.animaux = resultat;
      },
      erreur => {
        console.log('Erreur :' + erreur);
      }
    );
  }
  
  async afficherAjouterAnimal() {
    this.dataService.setIdClient(this.unClient.id);
    this.router.navigateByUrl('/modal-ajout-animal');
  }

  async afficherInfoAnimal(indice) {
    this.dataService.setIdAnimal(this.animaux[indice].id);
    this.router.navigateByUrl('/modal-info-animal');
  }

  returnTab1() {
    this.dataService.setIdClient('0');
    this.router.navigateByUrl('/tabs/tab1');
  }

}