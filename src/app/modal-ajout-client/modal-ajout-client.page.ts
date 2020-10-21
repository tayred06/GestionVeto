import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Geolocation } from "@ionic-native/geolocation/ngx";

import { ClientService } from "../service/client.service";
import { Client } from "../model/client";

import { Router } from "@angular/router";
import { from } from 'rxjs';
import { ViewWillEnter } from '@ionic/angular';


@Component({
  selector: 'app-modal-ajout-client',
  templateUrl: './modal-ajout-client.page.html',
  styleUrls: ['./modal-ajout-client.page.scss'],
})
export class ModalAjoutClientPage implements ViewWillEnter {

  public nouvClient: any;
  public coord: any;
  public nouvCoord: any

  constructor(private geolocation: Geolocation, private router: Router ,private httpClient: HttpClient, private clientService: ClientService) {
    this.nouvClient = new Client("", "", "", "");
    
  }

  async ionViewWillEnter() {
    this.recupLoca();
  }

  async recupLoca() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coord = resp.coords.latitude + ", " + resp.coords.longitude;
    }).catch((error) => {
      console.log('Erreur loca' + error);
    });
    return this.coord;
  }

  async ajouterClient() {
    this.recupLoca();
    this.httpClient.get("http://127.0.0.1/api-veto/api_insert_unClient.php?nom=" + this.nouvClient.nom + "&prenom=" + this.nouvClient.prenom + "&tel=" + this.nouvClient.tel + "&adresse=" + this.nouvClient.adresse + "&geolocation=" + this.coord).subscribe(
      resultat => {
      },
      erreur => {
        console.log('Erreur' + erreur);
      }
    );
  }

  returnTab1() {
    this.router.navigateByUrl('tabs/tab1');
  }

  
  

}
