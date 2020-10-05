import { Component, OnInit, Input } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-modal-ajout-animal',
  templateUrl: './modal-ajout-animal.page.html',
  styleUrls: ['./modal-ajout-animal.page.scss'],
})
export class ModalAjoutAnimalPage implements OnInit {

  public typeAnimal: Array<Object>;
  public nouvAnimal: any;

  @Input() id:string;

  constructor(private httpClient:HttpClient) {
    this.nouvAnimal = new Array<Object>("", "", "", "");
    this.typeAnimal = new Array<Object>();
    this.typeAnimal.push({type: 'Vache'});
    this.typeAnimal.push({type: 'Chien'});
    this.typeAnimal.push({type: 'Poule'});
    this.typeAnimal.push({type: 'Coq'});
    
    
  }

  ngOnInit() {

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
  }

}
