import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlertController, ViewWillEnter } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { from } from 'rxjs';
import { ModalInfoAnimalPage } from "../modal-info-animal/modal-info-animal.page";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements ViewWillEnter{
  
  public animaux: any;
  public listanimaux: any;
  public search: string;
  private fenetreSuppre: any;
  private modalInfoAnimal: any;

  public urlAPI: string = 'http://127.0.0.1/api-veto/api_select_animal.php';

  constructor(private httpClient: HttpClient ,private modalController: ModalController, private alertController:AlertController) {

    this.animaux = new Array<Object>();
    this.listanimaux = new Array<Object>();
    this.listanimaux = this.animaux;
  }

  ionViewWillEnter() {
    this.initialiserAnimal();
  }

  initialiserAnimal() {
    this.httpClient.get(this.urlAPI).subscribe(
      resultat => {
        console.log(resultat);
        this.animaux = resultat;
        this.listanimaux = this.animaux;
      },
      erreur => {
        console.log('Erreur' + erreur);
      }
    );
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

  async valideSuppre(indice) {
    this.fenetreSuppre = await this.alertController.create({
      header: 'Supprimer',
      message: 'Voulez vous vraiment supprimer cette animale ?',
      buttons: [{
        text: 'Annuler',
      },
      {
        text: 'Supprimer',
        handler: data => {
          this.supprAnimal(indice);
        }
      }]
    });
    this.fenetreSuppre.present();
  }

  supprAnimal(indice) {
    this.animaux.splice(indice, 1);
    this.listanimaux = this.animaux;
    this.search = '';
  }

  async filterList(evt) {
    this.listanimaux = await this.animaux;
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.listanimaux = this.animaux.filter(data => {
      if (data.prenom && searchTerm) {
        return (data.prenom.toLowerCase().indexOf(searchTerm.toLowerCase())) > -1 || (data.type.toLowerCase().indexOf(searchTerm.toLowerCase())) > -1;
      }
    });
  }
  
}
