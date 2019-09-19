export interface Sancion {
  idTorneo: number;
  fechas: Array<{
    fecha: string;
    sanciones: Array<{
      piloto: string;
      sancion: string;
      descripcion: string;
      gravedad: number;
    }>;
  }>;
}
