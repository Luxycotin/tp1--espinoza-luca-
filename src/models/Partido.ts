import { Equipo } from "./Equipo";
import { Deporte } from "./Deporte";
import { Resultado } from "./Resultado";
import { IIdentificable } from "../interfaces/IIdentificable";

export class Partido implements IIdentificable {
  public resultado?: Resultado;

  constructor(
    public readonly id: string,
    public local: Equipo,
    public visitante: Equipo,
    public deporte: Deporte
  ) {
    if (local === visitante) throw new Error("No puede ser el mismo equipo");
    if (!deporte.validar(local) || !deporte.validar(visitante))
      throw new Error("Equipos no válidos para el deporte");
  }

  jugar(): void {
    const golesLocal = Math.floor(Math.random() * 5);
    const golesVisitante = Math.floor(Math.random() * 5);
    this.resultado = new Resultado(golesLocal, golesVisitante);
  }

  toString(): string {
    return `${this.local.nombre} vs ${this.visitante.nombre} (${this.resultado?.toString() ?? "Pendiente"})`;
  }
}
