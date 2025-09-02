export class Resultado {
  constructor(public golesLocal: number, public golesVisitante: number) {
    if (golesLocal < 0 || golesVisitante < 0) {
      throw new Error("Los goles no pueden ser negativos");
    }
  }

  toString(): string {
    return `${this.golesLocal} - ${this.golesVisitante}`;
  }
}
