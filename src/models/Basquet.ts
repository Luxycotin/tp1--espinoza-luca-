import { Deporte } from "./Deporte";
import { Equipo } from "./Equipo";

export class Basquet extends Deporte {
  constructor() {
    super("Básquet", 5);
  }
  validar(equipo: Equipo): boolean {
    return equipo.cantidad > 0 && equipo.cantidad <= this.maxPorEquipo;
  }
}
