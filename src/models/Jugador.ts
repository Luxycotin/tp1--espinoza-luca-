import { IIdentificable } from "../interfaces/IIdentificable";

export class Jugador implements IIdentificable {
  constructor(
    public readonly id: string,
    public nombre: string,
    public edad: number,
    public posicion?: string
  ) {}

  toString(): string {
    return `${this.nombre} (${this.posicion ?? "sin posición"})`;
  }
}
