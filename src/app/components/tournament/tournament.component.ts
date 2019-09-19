import { Component, OnInit, Input } from '@angular/core';
import { Torneo } from '../interfaces/torneo';
import { ActivatedRoute } from '@angular/router';
import { TorneoService } from '../../services/torneo.service';
import { Piloto } from '../interfaces/piloto';
import { Equipo } from '../interfaces/equipo';
import { CarouselInfo } from '../interfaces/carousel-info';
import { SancionesService } from '../../services/sanciones.service';
import { Sancion } from 'src/app/interfaces/sancion';

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
    "logo":undefined,
    "listaCarreras":[],
    "listaPilotos":[],
    "listaEquipos":[],
    "puntajes":[],
  };
  showEquipo:boolean;
  showCountryHeader:boolean;
  data:Promise<Torneo>;
  showTable:boolean = false;
  header:CarouselInfo[];
  dataSanciones: Promise<Array<Sancion>>;
  sancionesList:Sancion[];

  constructor(private _activatedRout:ActivatedRoute,private _service:TorneoService, private _sancionesService: SancionesService) {
    this._activatedRout.params.subscribe(params => {
      this.idTorneo = params['idTorneo'];
    });
  }

  ngOnInit() {
    this._service.getTorneos().subscribe(data => {
      if(this.idTorneo){
        data.filter(tournament => {
          if (tournament.id == this.idTorneo) {
            this.torneo = tournament;
          }
        });
        this._service.calculatePointsDrivers(this.torneo.listaPilotos, this.torneo.puntajes);
        this._service.calculatePointsTeams(this.torneo.listaPilotos, this.torneo.listaEquipos);
        this.showCountryHeader = this._service.checkShowCountryHeader(this.torneo.listaPilotos);
        this.showEquipo = this.torneo.listaEquipos.length > 0 ? true : false;
        this.data = new Promise<Torneo>((resolve) => {
          resolve(this.torneo);
        });
        this._sancionesService.getSanciones().subscribe(data => {
          this.sancionesList = [];
          data.forEach(sancion => {
            if (sancion.idTorneo === this.torneo.id){
              this.sancionesList.push(sancion);
            }
          });
          if (this.sancionesList.length > 0) {
            this.dataSanciones = new Promise<Sancion[]>((resolve) => {
              resolve(this.sancionesList);
            });
          }
        });
      }
    }, error => {});


  }
}
