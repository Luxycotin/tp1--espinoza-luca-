import { Partido } from "./Partido";
import { IIdentificable } from "../interfaces/IIdentificable";

export class Torneo implements IIdentificable {
  private partidos: Partido[] = [];

  constructor(public readonly id: string, public nombre: string) {}

  programarPartido(partido: Partido): void {
    this.partidos.push(partido);
  }

  listarPartidos(): string[] {
    return this.partidos.map(p => p.toString());
  }

  buscarPartido(id: string): Partido | undefined {
    return this.partidos.find(p => p.id === id);
  }
}
