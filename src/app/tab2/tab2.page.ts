import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { ModalAjoutAnimalPage } from '../modal-ajout-animal/modal-ajout-animal.page';
import { ModalInfoAnimalPage } from "../modal-info-animal/modal-info-animal.page";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  public animaux:Array<Object>;
  public listanimaux:Array<Object>;
  public search: string;
  private fenetreSuppre: any;
  private modalAjoutAnimal: any;
  private modalInfoAnimal: any;

  constructor(private modalController: ModalController, private alertController:AlertController) {

    this.animaux = new Array<Object>();
    this.listanimaux = new Array<Object>();
    this.listanimaux = this.animaux;
    this.animaux.push({nom: 'margerite', type: 'vache', datenaisse: '12'});
    this.animaux.push({nom: 'tat', type: 'poule', datenaisse: '12'});
    this.animaux.push({nom: 'leo', type: 'canard', datenaisse: '12'});
    this.animaux.push({nom: 'vita', type: 'vache', datenaisse: '12'});
    this.animaux.push({nom: 'zeta', type: 'coque', datenaisse: '12'});
    this.animaux.push({nom: 'malo', type: 'chat', datenaisse: '12'});
    this.animaux.push({nom: 'nemo', type: 'chien', datenaisse: '12'});

  }

  async afficherAjouterAnimal() {
    console.log('Affichage de la modal pour ajouer un animal');
    this.modalAjoutAnimal = await this.modalController.create({
      component: ModalAjoutAnimalPage,
      swipeToClose: true
    });
    return await this.modalAjoutAnimal.present();
  }

  async afficherInfoAnimal() {
    console.log('Affichage de la modal pour les infos d\'un animal');
    this.modalInfoAnimal = await this.modalController.create({
      component: ModalInfoAnimalPage,
      swipeToClose: true
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
  }

}
