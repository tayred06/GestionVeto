import { newArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Client } from "../model/client";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  listeClient: Array<Client>;

  constructor() {
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
