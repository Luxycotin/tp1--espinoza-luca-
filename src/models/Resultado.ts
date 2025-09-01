export class Resultado {
  constructor(public golesLocal: number, public golesVisitante: number) {}

  toString(): string {
    return `${this.golesLocal} - ${this.golesVisitante}`;
  }
}
