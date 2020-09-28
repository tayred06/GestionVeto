import { newArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Client } from "../model/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  listeClient:Array<Client>;

  constructor() {
    console.log('Hello ClientService Provider');
    this.listeClient = new Array<Client>();
  }
  getClients():Array<Client> {
    return this.listeClient;
  }

  ajouterClient(client:Client) {
    this.listeClient.push(client);
  }

  supprimerClient(indice) {
    this.listeClient.splice(indice, 1);
  }
}
