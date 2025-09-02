import { ICompetidor } from "../Interfaces/ICompetidor";
import { Jugador } from "./Jugador";


export class Equipo implements ICompetidor {
  public readonly id: string;
  public nombre: string;
  #jugadores: Map<string, Jugador> = new Map();

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  agregarJugador(jugador: Jugador): void {
    if (this.#jugadores.has(jugador.id)) {
      throw new Error(`El jugador ${jugador.nombre} ya está en el equipo ${this.nombre}`);
    }
    this.#jugadores.set(jugador.id, jugador);
  }

  listarIntegrantes(): string[] {
    return Array.from(this.#jugadores.values()).map((j) => j.toString());
  }

  listaIntegrantes(): string[] {
    return this.listarIntegrantes();
  }

  get cantidad(): number {
    return this.#jugadores.size;
  }

  toString(): string {
    return `${this.nombre} (${this.cantidad} jugadores)`;
  }
}
