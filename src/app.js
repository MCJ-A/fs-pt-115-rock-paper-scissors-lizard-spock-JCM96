// Usamos los nombres en inglés como se especifica en el README para consistencia.
const OPTIONS = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
/**
 * La computadora azar.
 */
const getComputerChoice = () => {
  const index = Math.floor(Math.random() * OPTIONS.length);
  return OPTIONS[index];
};

/**
 * Comparar las jugadas y resultado.
 */
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "empate!";
  }
    // Reglas para saber quién gana a quién
  const rules = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock'],
  };
    if (rules[userChoice].includes(computerChoice)) {
    return 'ganaste 🎉';
  }
    return 'perdiste 😢';
};
// --- Inicia el juego ---
const userChoice = prompt(`Choose one of: ${OPTIONS.join(', ')}: `).toLowerCase();

if (OPTIONS.includes(userChoice)) {
  const computerChoice = getComputerChoice();
    console.log(`User chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
} else {
  console.log('opcion invalida');
}