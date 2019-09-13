import { Component, OnInit, Input } from '@angular/core';
import { CarouselService } from '../../services/carousel.service';
import { CarouselInfo } from '../interfaces/carousel-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() listCarousel:CarouselInfo[];
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  goTo(item:CarouselInfo){

    this._router.navigate([item.router]);

  }


}
