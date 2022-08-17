"use strict";

function getSelectedPetInfo(petId) {
  switch (petId) {
    case "hipodoge":
      return {
        name: "Hipodoge",
        emoji: "🔥",
      };
    case "capipepo":
      return {
        name: "Capipepo",
        emoji: "💧",
      };
    case "ratigueya":
      return {
        name: "Ratigüeya",
        emoji: "🌱",
      };
  }
}

function selectPlayerPet() {
  const petsToSelect = document.querySelectorAll("input[name='pet']");
  let petId = "";
  for (let i = 0; i < petsToSelect.length; i++) {
    const pet = petsToSelect[i].id;
    const isChecked = petsToSelect[i].checked;
    if (isChecked) petId = pet;
  }
  const selectedPet = getSelectedPetInfo(petId);
  console.log(selectedPet);
  const petSelectionMsg = selectedPet
    ? `You selected ${selectedPet.name.toUpperCase()}! ${selectedPet.emoji}`
    : "No pet selected...";
  alert(petSelectionMsg);
}

function startGame() {
  const btnPlayerPet = document.getElementById("pet-btn");
  btnPlayerPet.addEventListener("click", selectPlayerPet);
}

window.addEventListener("load", startGame);
