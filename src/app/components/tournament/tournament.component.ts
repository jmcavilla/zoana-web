import { Component, OnInit, Input } from '@angular/core';
import { Torneo } from '../interfaces/torneo';
import { ActivatedRoute } from '@angular/router';
import { TorneoService } from '../../services/torneo.service';
import { Piloto } from '../interfaces/piloto';
import { Equipo } from '../interfaces/equipo';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  idTorneo:number;
  torneo:Torneo = {
    "id":undefined,
    "nombre":undefined,
    "listaCarreras":[],
    "listaPilotos":[],
    "listaEquipos":[],
    "puntajes":[],
  };
  showEquipo:boolean;
  showCountryHeader:boolean;

  constructor(private _activatedRout:ActivatedRoute,private _service:TorneoService) {
    this._activatedRout.params.subscribe(params => {
      this.idTorneo = params['idTorneo'];
    });
  }

  ngOnInit() {
    this._service.getTorneos().subscribe(data => {
      if(this.idTorneo){
        data.filter(tournament => {
          if(tournament.id == this.idTorneo){
            this.torneo = tournament;
          }
        });
        this._service.calculatePointsDrivers(this.torneo.listaPilotos, this.torneo.puntajes);
        this._service.calculatePointsTeams(this.torneo.listaPilotos, this.torneo.listaEquipos);
        this.showCountryHeader = this._service.checkShowCountryHeader(this.torneo.listaPilotos);
        this.showEquipo = this.torneo.listaEquipos.length > 0 ? true : false;
      }
    }, error => {});
  }
}
