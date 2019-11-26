import { Torneo } from '../components/interfaces/torneo';
export interface HomeCarrousel{
    posicion:number;
    imagen:string;
    torneo:Torneo,
    titulo:string;
    subtitulo:string;
    router:string;
}