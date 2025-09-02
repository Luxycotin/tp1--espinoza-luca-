import { IIdentificable } from "../Interfaces/IIdentificable";
import { Equipo } from "./Equipo";
import { Deporte } from "./Deporte";
import { Partido } from "./Partido";

export class Torneo implements IIdentificable {
  public readonly id: string;
  public nombre: string;
  #partidos: Map<string, Partido> = new Map();

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  programarPartido(id: string, local: Equipo, visitante: Equipo, deporte: Deporte): Partido {
    if (this.#partidos.has(id)) {
      throw new Error(`Ya existe un partido con id ${id}`);
    }
    const p = new Partido(id, local, visitante, deporte);
    this.#partidos.set(id, p);
    return p;
  }

  listarPartidos(): Partido[] {
    return Array.from(this.#partidos.values());
  }

  buscarPartido(id: string): Partido | undefined {
    return this.#partidos.get(id);
  }

  tablaDePuntos(): { equipo: string; puntos: number; gf: number; gc: number; dg: number }[] {
    const tabla: Record<string, { equipo: string; puntos: number; gf: number; gc: number; dg: number }> = {};

    for (const partido of this.#partidos.values()) {
      const res = partido.resultado;
      if (!res) continue;

      const local = partido.local.nombre;
      const visitante = partido.visitante.nombre;

      if (!tabla[local]) tabla[local] = { equipo: local, puntos: 0, gf: 0, gc: 0, dg: 0 };
      if (!tabla[visitante]) tabla[visitante] = { equipo: visitante, puntos: 0, gf: 0, gc: 0, dg: 0 };

      tabla[local].gf += res.golesLocal;
      tabla[local].gc += res.golesVisitante;
      tabla[visitante].gf += res.golesVisitante;
      tabla[visitante].gc += res.golesLocal;

      if (res.golesLocal > res.golesVisitante) {
        tabla[local].puntos += 3;
      } else if (res.golesLocal < res.golesVisitante) {
        tabla[visitante].puntos += 3;
      } else {
        tabla[local].puntos += 1;
        tabla[visitante].puntos += 1;
      }
    }


    Object.values(tabla).forEach(t => (t.dg = t.gf - t.gc));

   
    return Object.values(tabla).sort((a, b) => b.puntos - a.puntos || b.dg - a.dg);
  }

  
  ganador(): string | null {
    const tabla = this.tablaDePuntos();
    return tabla.length > 0 ? tabla[0].equipo : null;
  }

  toString(): string {
    return `Torneo ${this.nombre} (${this.#partidos.size} partidos)`;
  }
}
