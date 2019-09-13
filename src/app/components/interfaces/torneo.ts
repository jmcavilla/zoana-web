import { Carrera } from './carrera';
import { Piloto } from './piloto';
import { Equipo } from './equipo';
export interface Torneo {
  id:number;
  nombre:string;
  listaCarreras:Carrera[];
  listaPilotos:Piloto[];
  listaEquipos:Equipo[];
  puntajes:number[];
}
