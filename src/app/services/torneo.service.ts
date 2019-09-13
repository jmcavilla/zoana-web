import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Torneo } from '../components/interfaces/torneo';
import { BaseService } from './base.service';
import { Piloto } from '../components/interfaces/piloto';
import { Equipo } from '../components/interfaces/equipo';


@Injectable({
  providedIn: 'root'
})
export class TorneoService extends BaseService{

  constructor(private _http:HttpClient) { super(_http) }

  getTorneos(){
    return this._http.get<Array<Torneo>>(`${this.endpoint}/torneos`);
  }

  calculatePointsDrivers(listaPilotos:Piloto[],puntajes:number[]):void{
    listaPilotos.forEach(piloto => {
      let puntos = 0;

      piloto.resultados.forEach(resultado => {
        if(resultado > 0){
          puntos += puntajes[resultado-1];
        }
      });

      piloto.puntos = puntos;
    });
  }

  calculatePointsTeams(listaPilotos:Piloto[], listaEquipos:Equipo[]):void{
    listaEquipos.forEach(equipo => {
      let puntos = 0;
      listaPilotos.forEach(piloto => {
        if(piloto.equipo == equipo.id){
          puntos += piloto.puntos;
        }
      });
      equipo.puntos = puntos;
    });

  }

  checkShowCountryHeader(listaPilotos:Piloto[]):boolean{
    let result = true;
    listaPilotos.forEach(piloto => {
      if(!piloto.pais || piloto.pais.trim() === ''){
        result = false;
        return result;
      }
    });
    return result;
  }
}
