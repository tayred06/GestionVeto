import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { AlertController, ViewWillEnter } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { ClientService } from "../service/client.service";
import { Client } from "../model/client";

import { from } from 'rxjs';
import { ModalAjoutClientPage } from '../modal-ajout-client/modal-ajout-client.page';
import { ModalInfoClientPage } from '../modal-info-client/modal-info-client.page';

import { Router } from "@angular/router";
import { DataService } from "../service/data.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements ViewWillEnter {
  private modalClient: any;
  private modalInfoClient: any;

  public clients: any;
  public listclients: any;
  
  public urlApi: string = 'http://127.0.0.1/api-veto/api_select_client.php';

  public search: string;
  private fenetreSuppre: any;

  constructor(private dataService: DataService, private router: Router, private httpClient: HttpClient ,private clientService: ClientService ,private modalController: ModalController, private alertController:AlertController) {
    this.clients = new Array<Client>();
    //this.initialiserClient();
    this.listclients = new Array<Client>();

  }

  ionViewWillEnter() {
    this.initialiserClient();
  }

  initialiserClient() {
    this.httpClient.get(this.urlApi).subscribe(
      resultat => {
        console.log(resultat);
        this.clients = resultat;
        this.listclients = this.clients;
      },
      erreur => {
        console.log('Erreur' + erreur);
      }
    );
  }

  async afficherInfoClient(indice){
    this.dataService.setIdClient(this.clients[indice].id);
    this.router.navigateByUrl('/modal-info-client');
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
          this.httpClient.get("http://127.0.0.1/api-veto/api_delete_unClient.php?id="+this.clients[indice].id).subscribe(
            resultat => {
              this.initialiserClient();
            },
            erreur => {
              console.log('Erreur' + erreur);
            }
          );
        }
      }]
    });
    this.fenetreSuppre.present();
  }

  async afficherAjouterClient() {
    this.router.navigateByUrl('/modal-info-client');
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