import { Component, OnInit } from '@angular/core';
import { TorneoService } from '../../services/torneo.service';
import { Torneo } from '../interfaces/torneo';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {
  
  torneos:Promise<Torneo[]>;
  showLoading: boolean = true;

  constructor(private _torneoService:TorneoService) { }

  ngOnInit() {

    this._torneoService.getTorneos().subscribe(data => {
      let torneos:Array<Torneo> = data.torneos;
      torneos.forEach(torneo => {
        this._torneoService.calculatePointsDrivers(torneo.listaPilotos, torneo.puntajes);
      });
      this.torneos = new Promise<Torneo[]>((resolve) => {
        this.showLoading = false;
        resolve(torneos);
      });
    }, error => {

    });

  }

}
