import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function($) {
      "use strict";

      // manual carousel controls
      console.log("EJECUTADO!");
      $('.next').click(function(){ $('#postsCarousel').carousel('next');return false; });
      $('.prev').click(function(){ $('#postsCarousel').carousel('prev');return false; });

  })(jQuery);
  }

}
