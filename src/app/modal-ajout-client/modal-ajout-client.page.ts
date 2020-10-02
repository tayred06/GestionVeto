import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ClientService } from "../service/client.service";
import { Client } from "../model/client";

@Component({
  selector: 'app-modal-ajout-client',
  templateUrl: './modal-ajout-client.page.html',
  styleUrls: ['./modal-ajout-client.page.scss'],
})
export class ModalAjoutClientPage implements OnInit {

  public nouvClient: any;

  constructor(private httpClient: HttpClient, private clientService: ClientService) {
    this.nouvClient = new Client("", "", "", "");
    
  }

  ajouterClient() {
  //this.clientService.ajouterClient(this.nouvClient);
  this.httpClient.get("http://127.0.0.1/api-veto/api_insert_unClient.php?nom=" + this.nouvClient.nom + "&prenom=" + this.nouvClient.prenom + "&tel=" + this.nouvClient.tel + "&adresse=" + this.nouvClient.nom + ";").subscribe(
    resultat => {
      console.log('ca marche');
    },
    erreur => {
      console.log('Erreur' + erreur);
    }
  );
  }

  async dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      // const modal = await this.modalCtrl.getTop();
      // this.modalCtrl.dismiss({
      //   'dismissed': true
      // });
      console.log('Fermetur de la modale');
    }
  ngOnInit() {
  }

}
