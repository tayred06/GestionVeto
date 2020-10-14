import { Component, OnInit, Input } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Router } from "@angular/router";
import { DataService } from "../service/data.service";

@Component({
  selector: 'app-modal-ajout-animal',
  templateUrl: './modal-ajout-animal.page.html',
  styleUrls: ['./modal-ajout-animal.page.scss'],
})
export class ModalAjoutAnimalPage implements OnInit {

  public typeAnimal: any;
  public nouvAnimal: any;

  public URLApi: string = 'http://127.0.0.1/api-veto/api_select_typeAnimal.php';

  @Input() id:string;

  constructor(private router: Router, private dataService: DataService ,private httpClient:HttpClient) {
    this.nouvAnimal = new Array<Object>("", "", "", "");
    this.typeAnimal = new Array<Object>();
    
  }

  ngOnInit() {
    this.httpClient.get(this.URLApi).subscribe(
      resultat => {
        console.log(resultat);
        this.typeAnimal = resultat;
      },
      erreur => {
        console.log('Erreur' + erreur);
      }
    );
  }

  ajouterAnimal() {
    console.log(this.id);
    this.httpClient.get("http://127.0.0.1/api-veto/api_insert_unAnimal.php?prenom="+ this.nouvAnimal.prenom +"&type=" + this.nouvAnimal.type + "&dateNaiss=" + this.nouvAnimal.dateNaiss + "&idProprio=" + this.id).subscribe(
      resultat => {
        console.log('ca marche');
      },
      erreur => {
        console.log('Erreur' + erreur);
      }
    );
    this.router.navigateByUrl('/modal-info-client');
  }

  returnInfoClient() {
    this.router.navigateByUrl('/modal-info-client');
    this.dataService.setIdClient(this.id);
  }

}
