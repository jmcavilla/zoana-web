import { Component, OnInit } from '@angular/core';
import { CarouselInfo } from '../interfaces/carousel-info';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service:CarouselService) { }

  private listHomeCarousel:CarouselInfo[] = [];

  ngOnInit() {
    this._service.getHomeCarousel().subscribe(data => {
      console.log(data);
      this.listHomeCarousel = data;
      console.log(this.listHomeCarousel);
    },error => {
      console.log(error);
    })
  }

}
