import {IIdentificable} from "../Interfaces/IIdentificable";

export class Jugador implements IIdentificable {

    public  readonly id: string;
    public nombre: string;
    public edad: number;
    private _posicion?: string;

    constructor(id: string, nombre: string, edad: number, posicion?: string) {

        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this._posicion = posicion;

    }

    get posicion(): string | undefined {
        return this._posicion;
    }

  set posicion(p: string | undefined) {
    this._posicion = p;
  }

  toString(): string {
    return `${this.nombre} (${this.edad}${this._posicion ? `, ${this._posicion}` : ""})`;
  }


}