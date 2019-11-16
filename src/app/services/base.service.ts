import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  endpoint:string = "https://raw.githubusercontent.com/jmcavilla/zona-web-db/master/db.nomin.json";
  endpointSanciones:string = "https://raw.githubusercontent.com/jmcavilla/zona-web-sanciones/master/db.json";
  constructor(_http:HttpClient) { }
}
