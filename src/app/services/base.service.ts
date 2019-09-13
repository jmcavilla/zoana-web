import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  endpoint:string = "https://my-json-server.typicode.com/jmcavilla/zona-web-db";
  constructor(_http:HttpClient) { }
}
