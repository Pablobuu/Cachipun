let numeroPartidas = parseInt(
  prompt("Ingrese el número de partidas a jugar: ")
);
let puntajePlayer = 0;
let puntajeMaquina = 0;
let partidasJugadas = 0;

function machineChoice() {
  const choices = ["papel", "piedra", "tijera"];
  return choices[Math.floor(Math.random() * 3)];
}

function rondaDeJuego(playerChoice, machineChoice) {
  if (playerChoice === machineChoice) {
    return "Empate!";
  } else if (
    (playerChoice === "piedra" && machineChoice === "tijera") ||
    (playerChoice === "papel" && machineChoice === "piedra") ||
    (playerChoice === "tijera" && machineChoice === "papel")
  ) {
    puntajePlayer++;
    return "Ganaste!";
  } else {
    puntajeMaquina++;
    return "Perdiste!";
  }
}
