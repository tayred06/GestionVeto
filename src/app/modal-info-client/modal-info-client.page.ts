import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Client } from "../model/client";
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-modal-info-client',
  templateUrl: './modal-info-client.page.html',
  styleUrls: ['./modal-info-client.page.scss'],
})
export class ModalInfoClientPage implements ViewWillEnter {

  @Input() id:string;

  public unClient: any;
  // public urlApi: string = 'http://127.0.0.1/api-veto/api_select_unClient.php?recherche=' + this.id;

  constructor(private httpClient: HttpClient) {

    this.unClient = new Array<Client>();

  }

  ionViewWillEnter() {
    this.httpClient.get('http://127.0.0.1/api-veto/api_select_unClient.php?recherche=' + this.id).subscribe(
      resultat => {
        console.log(resultat);
        this.unClient = resultat;
      },
      erreur => {
        console.log('Erreur' + erreur);
      }
    );

    
  }
  




}
