import { Jugador } from "./models/Jugador";
import { Equipo } from "./models/Equipo";
import { Futbol } from "./models/Futbol";
import { Basquet } from "./models/Basquet";
import { Partido } from "./models/Partido";
import { Torneo } from "./models/Torneo";

// Crear jugadores
const j1 = new Jugador("1", "Luca", 20, "Delantero");
const j2 = new Jugador("2", "Juan", 22, "Arquero");

// Crear equipos
const equipoFutbol = new Equipo("Los Galácticos");
equipoFutbol.agregarJugador(j1);
equipoFutbol.agregarJugador(j2);

const equipoFutbol2 = new Equipo("Los Invencibles");
equipoFutbol2.agregarJugador(new Jugador("3", "Pedro", 21));

// Crear deporte
const futbol = new Futbol();

// Crear partido
const partido1 = new Partido("p1", equipoFutbol, equipoFutbol2, futbol);
partido1.jugar();
console.log(partido1.toString());

// Crear torneo
const torneo = new Torneo("t1", "Copa TS");
torneo.programarPartido(partido1);
console.log(torneo.listarPartidos());
