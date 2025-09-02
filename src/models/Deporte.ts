import { Equipo } from "./Equipo";

export abstract class Deporte {
  constructor(public readonly nombre: string, public readonly maxPorEquipo: number) {}


  abstract validar(equipo: Equipo): boolean;

  toString(): string {
    return `${this.nombre} (max ${this.maxPorEquipo})`;
  }
}
