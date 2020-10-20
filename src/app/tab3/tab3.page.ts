import { Component } from '@angular/core';

import { Geolocation } from "@ionic-native/geolocation/ngx";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public coordX: any;
  public coordY: any;

  constructor(private geolocation: Geolocation) {

  }

  async afficherLoca() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coordX = resp.coords.latitude;
      this.coordY = resp.coords.longitude;
    }).catch((error) => {
      console.log('Erreur loca' + error);
    });
  }

  async openMaps() {
    this.afficherLoca()
    window.open('https://www.google.com/maps/search/?api=1&query=' + this.coordX + "," + this.coordY);
  }

}
