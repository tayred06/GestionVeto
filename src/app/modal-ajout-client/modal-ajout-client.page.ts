import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { ClientService } from "../service/client.service";
import { Client } from "../model/client";

@Component({
  selector: 'app-modal-ajout-client',
  templateUrl: './modal-ajout-client.page.html',
  styleUrls: ['./modal-ajout-client.page.scss'],
})
export class ModalAjoutClientPage implements OnInit {

  public nouvClient: any;
  // public nom:string;
  // public prenom:string;
  // public tel:number;
  // public adresse:string;
  
  constructor(private clientService: ClientService) {
    this.nouvClient = new Client("", "", "", "");
    
  }

  ajouterClient() {
    this.clientService.ajouterClient(this.nouvClient);
    console.log(this.nouvClient);
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
