import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarouselInfo } from '../components/interfaces/carousel-info';
import { BaseService } from './base.service';
import { DataBase } from '../interfaces/database';


@Injectable({
  providedIn: 'root'
})
export class CarouselService extends BaseService{

  constructor(private _http:HttpClient) { super(_http) }

  getHomeCarousel(){

    return this._http.get<DataBase>(`${this.endpoint}`);

  }
}
