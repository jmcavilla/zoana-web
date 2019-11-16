import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sancion } from '../interfaces/sancion';
import { BaseService } from './base.service';
import { SancionesDataBase } from '../interfaces/sancionesDataBase';

@Injectable({
  providedIn: 'root'
})
export class SancionesService extends BaseService{

  constructor(private _http: HttpClient) {
    super(_http);
   }

  getSanciones() {
    return this._http.get<SancionesDataBase>(`${this.endpointSanciones}`);
  }

}
