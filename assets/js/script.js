//variables de juego

let puntajePlayer = 0;
let puntajeMaquina = 0;
let partidasJugadas = 1;
let empates = 0;
let numeroPartidas = parseInt(
  prompt("Ingrese el número de partidas a jugar: ")
);

//función que determina lógica del juego y añade marcador
function determinaGanador(playerChoice, machineChoice) {
  if (playerChoice === machineChoice) {
    empates++;
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

//Función que determina jugada de la máquna
function getMachineChoice() {
  const choices = ["piedra", "papel", "tijera"];
  return choices[Math.floor(Math.random() * 3)];
}

//Función que determina resultados y actualiza los textos
function jugarPartida(playerChoice) {
  const machineChoice = getMachineChoice();
  const result = determinaGanador(playerChoice, machineChoice);

  document.getElementById("result").innerText = result;
  document.getElementById("user-score").innerText = puntajePlayer;
  document.getElementById("computer-score").innerText = puntajeMaquina;
  document.getElementById("plays").innerText = partidasJugadas;
  document.getElementById("ties").innerText = empates;

  partidasJugadas++;

  if (partidasJugadas > numeroPartidas && puntajePlayer > puntajeMaquina) {
    document.getElementById("resultadoFinal").innerText =
      "La partida ha terminado, has triunfado!.";
  } else if (
    partidasJugadas > numeroPartidas &&
    puntajePlayer < puntajeMaquina
  ) {
    document.getElementById("resultadoFinal").innerText =
      "La partida ha terminado, has perdido.";
  } else if (
    partidasJugadas > numeroPartidas &&
    puntajePlayer === puntajeMaquina
  ) {
    document.getElementById("resultadoFinal").innerText = "Es un empate!!!";
  }
}

//Listeners que activan los botones y determinan el final de la partida
document.getElementById("piedra").addEventListener("click", function () {
  jugarPartida("piedra");
  if (partidasJugadas > numeroPartidas) {
    terminaPartida();
  }
});

document.getElementById("papel").addEventListener("click", function () {
  jugarPartida("papel");
  if (partidasJugadas > numeroPartidas) {
    terminaPartida();
  }
});

document.getElementById("tijera").addEventListener("click", function () {
  jugarPartida("tijera");
  if (partidasJugadas > numeroPartidas) {
    terminaPartida();
  }
});

//Función que deshabilita los botones al terminar la partida, y esconde el display de resultados
function terminaPartida() {
  document.getElementById("result").style.display = "none";
  document.getElementById("piedra").disabled = true;
  document.getElementById("papel").disabled = true;
  document.getElementById("tijera").disabled = true;
}
