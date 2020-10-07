import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Client } from "../model/client";
import { ViewWillEnter } from '@ionic/angular';

import { ModalController } from '@ionic/angular';
import { ModalAjoutAnimalPage } from '../modal-ajout-animal/modal-ajout-animal.page';
import { ModalInfoAnimalPage } from "../modal-info-animal/modal-info-animal.page";


@Component({
  selector: 'app-modal-info-client',
  templateUrl: './modal-info-client.page.html',
  styleUrls: ['./modal-info-client.page.scss'],
})
export class ModalInfoClientPage implements ViewWillEnter {

  @Input() id:string;

  private modalAjoutAnimal: any;
  private modalInfoAnimal: any;

  public idProprio: string;

  public unClient: any;
  public animaux: any;
  // public urlApi: string = 'http://127.0.0.1/api-veto/api_select_unClient.php?recherche=' + this.id;

  constructor(private httpClient: HttpClient, private modalController: ModalController) {

    this.unClient = new Array<Client>();
    this.animaux = new Array<Object>();
    

  }

  ionViewWillEnter() {
    
    this.idProprio = this.id;
    this.httpClient.get('http://127.0.0.1/api-veto/api_select_unClient.php?recherche=' + this.id).subscribe(
      resultat => {
        console.log('unClient' + resultat);
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
    console.log('Affichage de la modal pour ajouter un animal');
    this.modalAjoutAnimal = await this.modalController.create({
      component: ModalAjoutAnimalPage,
      swipeToClose: true,
      componentProps: {
        'id': this.idProprio
      }
    });
    return await this.modalAjoutAnimal.present();
  }

  async afficherInfoAnimal(indice) {
    console.log('Affichage de la modal pour les infos d\'un animal');
    this.modalInfoAnimal = await this.modalController.create({
      component: ModalInfoAnimalPage,
      swipeToClose: true,
      componentProps :{
        'id': this.animaux[indice].id
      }
    });
    return await this.modalInfoAnimal.present();
  }

}
