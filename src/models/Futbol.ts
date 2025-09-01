import { Deporte } from "./Deporte";
import { Equipo } from "./Equipo";

export class Futbol extends Deporte {
  constructor() {
    super("Fútbol", 11);
  }

  validar(equipo: Equipo): boolean {
    return equipo.cantidad <= this.maxPorEquipo;
  }
}
