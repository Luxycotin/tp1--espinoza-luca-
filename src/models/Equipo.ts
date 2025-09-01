import { ICompetidor } from "../interfaces/ICompetidor";
import { Jugador } from "./Jugador";

export class Equipo implements ICompetidor {
  private jugadores: Jugador[] = [];

  constructor(public nombre: string) {}

  agregarJugador(jugador: Jugador): boolean {
    if (this.jugadores.find(j => j.id === jugador.id)) return false;
    this.jugadores.push(jugador);
    return true;
  }

  listarIntegrantes(): string[] {
    return this.jugadores.map(j => j.toString());
  }

  get cantidad(): number {
    return this.jugadores.length;
  }

  toString(): string {
    return `${this.nombre} - ${this.cantidad} jugadores`;
  }
}
