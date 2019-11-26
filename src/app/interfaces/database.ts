import { Torneo } from '../components/interfaces/torneo';
import { HomeCarrousel } from './home_carrousel';

export interface DataBase {
    home_carousel:Array<HomeCarrousel>,
    torneos:Array<Torneo>
}