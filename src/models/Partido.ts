import { IIdentificable } from "../Interfaces/IIdentificable";
import { Equipo } from "./Equipo";
import { Deporte } from "./Deporte";
import { Resultado } from "./Resultado";

export class Partido implements IIdentificable {
  public readonly id: string;
  public readonly local: Equipo;
  public readonly visitante: Equipo;
  public readonly deporte: Deporte;
  #resultado?: Resultado;

  constructor(id: string, local: Equipo, visitante: Equipo, deporte: Deporte) {
    if (local.id === visitante.id) {
      throw new Error("Un partido no puede tener el mismo equipo como local y visitante");
    }
    this.id = id;
    this.local = local;
    this.visitante = visitante;
    this.deporte = deporte;
  }

  get resultado(): Resultado | undefined {
    return this.#resultado;
  }


  jugar(golesLocal?: number, golesVisitante?: number): void {
    if (!this.deporte.validar(this.local) || !this.deporte.validar(this.visitante)) {
      throw new Error("Los equipos no cumplen las reglas del deporte");
    }

    // Si no hay goles dados → generar aleatorios
    if (golesLocal === undefined || golesVisitante === undefined) {
      golesLocal = Math.floor(Math.random() * 6);     // 0–5 goles
      golesVisitante = Math.floor(Math.random() * 6); // 0–5 goles
    }

    this.#resultado = new Resultado(golesLocal, golesVisitante);
  }

  toString(): string {
    const base = `${this.deporte.nombre}: ${this.local.nombre} vs ${this.visitante.nombre}`;
    return this.#resultado ? `${base} => ${this.#resultado.toString()}` : `${base} (pendiente)`;
  }
}
