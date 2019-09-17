import { Component, OnInit } from '@angular/core';
import { CarouselInfo } from '../interfaces/carousel-info';
import { CarouselService } from '../../services/carousel.service';
import { Torneo } from '../interfaces/torneo';
import { TorneoService } from '../../services/torneo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service:CarouselService, private _torneoService:TorneoService) { }

  listHomeCarousel:CarouselInfo[] = [];
  torneos:Promise<Torneo[]>;

  ngOnInit() {
    this._service.getHomeCarousel().subscribe(data => {
      console.log(data);
      this.listHomeCarousel = data;
      console.log(this.listHomeCarousel);
    }, error => {
      console.log(error);
    });

    this._torneoService.getTorneos().subscribe(data => {
      data.forEach(torneo => {
        this._torneoService.calculatePointsDrivers(torneo.listaPilotos, torneo.puntajes);
      });
      debugger;
      this.torneos = new Promise<Torneo[]>((resolve) => {
        resolve(data);
      });
    }, error => {

    });
  }

}
