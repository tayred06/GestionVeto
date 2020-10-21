import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Router } from "@angular/router";

import { DataService } from "../service/data.service";
import { PhotoService } from '../service/photo.service';

@Component({
  selector: 'app-modal-info-animal',
  templateUrl: './modal-info-animal.page.html',
  styleUrls: ['./modal-info-animal.page.scss'],
})
export class ModalInfoAnimalPage implements OnInit {

  public id: string;

  public unAnimal: any;

  public inters: any;

  public lienImage: any;
  

  constructor(public photoService: PhotoService, private dataService: DataService, private router: Router, private httpClient: HttpClient) {
    this.unAnimal = new Array<Object>();
    
    this.inters = new Array<Object>();
  }

  ngOnInit() {
    this.id = this.dataService.getIdAnimal();
    this.httpClient.get('http://127.0.0.1/api-veto/api_select_interlByAnimal.php?recherche=' + this.id).subscribe(
      resultat => {
        this.inters = resultat;
      },
      erreur => {
        console.log(erreur);
      }
    );
    this.httpClient.get('http://127.0.0.1/api-veto/api_select_unAnimal.php?recherche=' + this.id).subscribe(
      resultat => {
        this.unAnimal = resultat;
        this.lienImage = this.unAnimal[0].linkImg
        this.photoService.loadSaved(this.lienImage);
      },
      erreur => {
        console.log('Erreur: ' + erreur);
      }
    );
  }

  returnTab1() {
    this.dataService.setIdAnimal('0');
    this.router.navigateByUrl('/tabs/tab1');
  }

  afficherAjoutIntervention() {
    this.dataService.setIdAnimal(this.id);
    this.router.navigateByUrl('/ajout-intervention')
  }

  afficherUneIntervention(indice) {
    this.dataService.setIdInter(this.inters[indice].id);
    this.router.navigateByUrl('/info-intervention');
  }

}
