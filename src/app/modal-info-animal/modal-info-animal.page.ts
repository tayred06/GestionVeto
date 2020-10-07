import { Component, OnInit, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-info-animal',
  templateUrl: './modal-info-animal.page.html',
  styleUrls: ['./modal-info-animal.page.scss'],
})
export class ModalInfoAnimalPage implements OnInit {

  @Input() id:string;

  public unAnimal: any;

  constructor(private httpClient: HttpClient) {
    this.unAnimal = new Array<Object>();
  }

  ngOnInit() {
    this.httpClient.get('http://127.0.0.1/api-veto/api_select_unAnimal.php?recherche=' + this.id).subscribe(
      resultat => {
        console.log(resultat);
        this.unAnimal = resultat;
      },
      erreur => {
        console.log('Erreur: ' + erreur);
      }
    );
  }

}
