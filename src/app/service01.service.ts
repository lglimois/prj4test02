import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service01Service {

  constructor() { }

  getLibelle(){
    return "Un libelle quelconque";
  }
  getStatus(){
    return "OK";
  }

  calculRemise(montant: string): string {
    let remise: string = "0";
    if(montant == "100") {
      remise = "10";
    }
    else {
      remise = "15";
    }
    return remise;
  }

  calculTaux(montant: string): string {
    let remise: string = "0";
    if(montant == "100") {
      remise = "10";
    }
    else {
      remise = "15";
    }
    return remise;
  }

}
