import {IIdentificable} from "./IIdentificable";


export interface ICompetidor extends IIdentificable {
    nombre: string;
    listaIntegrantes(): string[];
    
}