"use strict";

main();

function main() {
  let selecting = true;
  const exitPhrases = ["c", "cancel", "exit"];
  const rpsPhrases = ["rock", "paper", "scissors"];
  let userSelection;
  while (selecting === true) {
    selecting = false;
    userSelection = prompt('Write either "rock", "paper", or "scissors": ');
    if (exitPhrases.includes(userSelection)) {
      alert("You exited the program.");
    }
    if (rpsPhrases.includes(userSelection)) {
      alert("Nice! You selected " + userSelection + ".");
    }
    if (!rpsPhrases.includes(userSelection)) {
      alert(`"${userSelection}" isn't a valid input. Try again.`);
      selecting = true;
    }
  }
  //   const pcSelection = rpsPhrases[Math.floor(Math.random() * rpsPhrases.length)];
  const pcSelection = "scissors";
  const inputs = [userSelection, pcSelection];
  let winner;
  let winnerSelection;
  let loserSelection;
  if (userSelection === pcSelection) {
    winner = "tie";
  }
  if (inputs.includes("rock") && inputs.includes("paper")) {
    winner = inputs.indexOf("paper") === 0 ? "user" : "PC";
    winnerSelection = "paper";
    loserSelection = "rock";
  }
  if (inputs.includes("rock") && inputs.includes("scissors")) {
    winner = inputs.indexOf("rock") === 0 ? "user" : "PC";
    winnerSelection = "rock";
    loserSelection = "scissors";
  }
  if (inputs.includes("paper") && inputs.includes("scissors")) {
    winner = inputs.indexOf("scissors") === 0 ? "user" : "PC";
    winnerSelection = "scissors";
    loserSelection = "paper";
  }
  let loser;
  alert("Beware! PC is selecting.");
  alert("And the winner is...");
  if (winner !== "tie") {
    winner = inputs.indexOf(winnerSelection) === 0 ? "User" : "PC";
    loser = winner.toLowerCase() === "user" ? "PC" : "user";
    alert(
      `${winner} wins over ${loser}! ${
        winnerSelection.charAt(0).toUpperCase() + winnerSelection.slice(1)
      } beats ${loserSelection}.`
    );
  }
  if (winner === "tie") {
    alert("It's a tie! Neither one won.");
  }
}
