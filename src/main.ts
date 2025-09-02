import { Futbol } from "./models/Futbol";
import { Basquet } from "./models/Basquet";
import { Jugador } from "./models/Jugador";
import { Equipo } from "./models/Equipo";
import { Torneo } from "./models/Torneo";

function divider(title: string) {
  console.log(`\n=== ${title} ===`);
}

// Fútbol
divider("Torneo de Fútbol con 3 equipos");
const fut = new Futbol();

const eA = new Equipo("fa", "River");
const eB = new Equipo("fb", "Boca");
const eC = new Equipo("fc", "San Lorenzo");

// Acá se crean algunos jugadores, deberían ser más pero para el trabajo solo usaré 3
for (let i = 0; i < 3; i++) {
  eA.agregarJugador(new Jugador("a" + i, "A" + i, 20 + i));
  eB.agregarJugador(new Jugador("b" + i, "B" + i, 20 + i));
  eC.agregarJugador(new Jugador("c" + i, "C" + i, 20 + i));
}

const torneoFut = new Torneo("tf1", "Clásicos");
torneoFut.programarPartido("f1", eA, eB, fut).jugar(); // aleatorio
torneoFut.programarPartido("f2", eB, eC, fut).jugar();
torneoFut.programarPartido("f3", eC, eA, fut).jugar();

console.log("Partidos:");
torneoFut.listarPartidos().forEach(p => console.log(" -", p.toString()));

console.log("\nTabla de posiciones (Fútbol):");
console.table(torneoFut.tablaDePuntos());

// Basquet
divider("Torneo de Básquet con 3 equipos");
const basq = new Basquet();

const bA = new Equipo("ba", "Peñarol");
const bB = new Equipo("bb", "Boca Basket");
const bC = new Equipo("bc", "Quimsa");

for (let i = 0; i < 3; i++) {
  bA.agregarJugador(new Jugador("ba" + i, "BA" + i, 22 + i));
  bB.agregarJugador(new Jugador("bb" + i, "BB" + i, 22 + i));
  bC.agregarJugador(new Jugador("bc" + i, "BC" + i, 22 + i));
}

const torneoBasq = new Torneo("tb1", "Liga Nacional");
torneoBasq.programarPartido("b1", bA, bB, basq).jugar();
torneoBasq.programarPartido("b2", bB, bC, basq).jugar();
torneoBasq.programarPartido("b3", bC, bA, basq).jugar();

console.log("Partidos:");
torneoBasq.listarPartidos().forEach(p => console.log(" -", p.toString()));

console.log("\nTabla de posiciones (Básquet):");
console.table(torneoBasq.tablaDePuntos());
