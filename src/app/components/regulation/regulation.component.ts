import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regulation',
  templateUrl: './regulation.component.html',
  styleUrls: ['./regulation.component.css']
})
export class RegulationComponent implements OnInit {

  hardText = 'Gravedad Severa';
  highText = 'Gravedad Alta';
  mediumText = 'Gravedad Media';
  lowText = 'Gravedad Baja';
  nullText = 'Gravedad Nula';

  onePosition = '+1 puesto';
  twoPositions = '+2 puestos';
  threePositions = '+3 puestos';
  warning = 'Apercibimiento';
  noPosition = 'Sin sancion';
  desqualification = 'Descalificación';
  kickOut = 'Expulsión';

  oneSecond = '+1 segundo';
  twoSeconds = '+2 segundos';
  fiveSeconds = '+5 segundos';


  constructor() { }

  ngOnInit() {
  }

}
