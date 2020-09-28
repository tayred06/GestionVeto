import { Component } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { ClientService } from "../service/client.service";
import { Client } from "../model/client";

import { from } from 'rxjs';
import { ModalAjoutClientPage } from '../modal-ajout-client/modal-ajout-client.page';
import { modalInfoClient } from '../modal-info-client/modal-info-client';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  private modalClient: any;
  private modalInfoClient: any;

  public clients:Array<Client>;
  public listclients:Array<Client>;

  public search: string;
  private fenetreSuppre: any;

  constructor(private clientService: ClientService ,private modalController: ModalController, private alertController:AlertController) {
    this.clients = new Array<Client>();
    this.initialiserClient();
    this.listclients = new Array<Client>();
    this.listclients = this.clients;

    // this.clients.push({nom: 'Viel', prenom: 'Mathieu', tel: '12', adresse: 'test'});
    // this.clients.push({nom: 'Viel', prenom: 'Thomas', tel: '14', adresse: 'paris'});
    // this.clients.push({nom: 'Bial', prenom: 'Tom', tel: '15', adresse: 'rue'});
    // this.clients.push({nom: 'Moha', prenom: 'Timéo', tel: '7', adresse: 'street'});
    // this.clients.push({nom: 'Chiat', prenom: 'Romain', tel: '32', adresse: 'bvd'});
    console.log(this.clients);
  }

  initialiserClient() {
    this.clients = this.clientService.getClients();
  }

  async afficherInfoClient(indice){
    console.log('Affichage modal avec les infos client');
    this.modalInfoClient = await this.modalController.create({
      component: modalInfoClient,
      swipeToClose: true,
      componentProps: {
        'unClient': this.clients[indice]
      }
    });
    return await this.modalInfoClient.present();
  }

  ouvrirMaps(){
    console.log('Ouvertur dans maps');
  }

  async valideSuppre(indice) {
    this.fenetreSuppre = await this.alertController.create({
      header: 'Supprimer',
      message: 'Voulez vous vraiment supprimer ce client ?',
      buttons: [{
        text: 'Annuler',
      },
      {
        text: 'Supprimer',
        handler: data => {
          this.supprClient(indice);
        }
      }]
    });
    this.fenetreSuppre.present();
  }

  async afficherAjouterClient() {
    console.log('Affichage de la modal pour ajouer un client');
    this.modalClient = await this.modalController.create({
      component: ModalAjoutClientPage,
      swipeToClose: true
    });
    return await this.modalClient.present();
  }

  async filterList(evt) {
    this.listclients = await this.clients;
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.listclients = this.clients.filter(data => {
      if (data.nom && searchTerm) {
        return (data.nom.toLowerCase().indexOf(searchTerm.toLowerCase())) > -1 || (data.prenom.toLowerCase().indexOf(searchTerm.toLowerCase())) > -1;
      }
    });
  }

  supprClient(indice) {
    this.clients.splice(indice, 1);
    this.listclients = this.clients;
    this.search = '';
  }

}