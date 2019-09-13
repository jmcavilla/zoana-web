import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Torneo } from '../../interfaces/torneo';
import { TorneoService } from '../../../services/torneo.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() torneo: Torneo;
  @Input() showEquipo:boolean;
  @Input() showCountryHeader: boolean;

  constructor(private _torneoService:TorneoService) { }

  ngOnInit() {
  }

  actualizarTablas(){
    this._torneoService.calculatePointsDrivers(this.torneo.listaPilotos, this.torneo.puntajes);
    this._torneoService.calculatePointsTeams(this.torneo.listaPilotos, this.torneo.listaEquipos);
  }


  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.showCountryHeader);
  }
}
