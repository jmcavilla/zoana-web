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
  showLoading: boolean = true;

  async ngOnInit() {
    this._service.getHomeCarousel().subscribe(data => {
      console.log(data);
      this.listHomeCarousel = data.home_carousel;
      console.log(this.listHomeCarousel);
    }, error => {
      console.log(error);
    });

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
