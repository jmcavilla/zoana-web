import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() buttonText: string;
  @Input() text: string;
  @Input() router: string;
  @Input() class: string;

  ngOnInit() {
  }

}
