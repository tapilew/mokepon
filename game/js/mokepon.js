function startGame() {
  const btnPlayerPet = document.getElementById("pet-btn");
  btnPlayerPet.addEventListener("click", selectPlayerPet);
}

function selectPlayerPet() {
  const radHipodoge = document.getElementById("hipodoge");
  const radCapipepo = document.getElementById("capipepo");
  const radRatigueya = document.getElementById("ratigueya");
  let selectedPet = "";
  let petEmoji = "";
  if (radHipodoge.checked) {
    selectedPet = "Hipodoge";
    petEmoji = "🔥";
  } else if (radCapipepo.checked) {
    selectedPet = "Capipepo";
    petEmoji = "💧";
  } else if (radRatigueya.checked) {
    selectedPet = "Ratigüeya";
    petEmoji = "🌱";
  }
  let petSelectionMsg =
    selectedPet !== "" && petEmoji !== ""
      ? `You selected ${selectedPet.toUpperCase()}! ${petEmoji}`
      : "No pet selected...";
  alert(petSelectionMsg);
}

window.addEventListener("load", startGame);
