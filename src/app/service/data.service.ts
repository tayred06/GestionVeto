import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public idClient: string;
  public idAnimal: string;
  public idInter: string;

  constructor() {

  }

  setIdClient(id) {
    this.idClient = id;
  }
  getIdClient() {
    return this.idClient;
  }

  setIdAnimal(id) {
    this.idAnimal = id;
  }
  getIdAnimal() {
    return this.idAnimal;
  }

  setIdInter(id) {
    this.idInter = id;
  }
  getIdInter() {
    return this.idInter;
  }

}
