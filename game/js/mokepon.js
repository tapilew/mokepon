"use strict";

function getSelectedPetInfo(petsList, petId) {
  let pet;
  for (let i = 0; i < petsList.length; i++) {
    const listItem = petsList[i];
    if (petId === listItem.id) pet = listItem;
  }
  return pet;
}

function getSelectedPetMsg(selectedPet) {
  return selectedPet
    ? `You selected ${selectedPet.name.toUpperCase()}! ${selectedPet.emoji}`
    : "No pet selected...";
}

function getPetId() {
  const petsToSelect = document.querySelectorAll("input[name='pet']");
  let petId;
  for (let i = 0; i < petsToSelect.length; i++) {
    const pet = petsToSelect[i].id;
    const isChecked = petsToSelect[i].checked;
    if (isChecked) petId = pet;
  }
  return petId;
}

function labelWithPetName(span, petName) {
  span.innerHTML = petName;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function selectEnemyPet() {
  // TODO: Code this
}

function startGame() {
  const pets = [
    {
      name: "Hipodoge",
      id: "hipodoge",
      emoji: "🔥",
    },
    {
      name: "Capipepo",
      id: "capipepo",
      emoji: "💧",
    },
    {
      name: "Ratigüeya",
      id: "ratigueya",
      emoji: "🌱",
    },
  ];

  const btnPlayerPet = document.getElementById("pet-btn");
  const spanPlayerPet = document.getElementById("player-pet");
  let selectedPet;
  btnPlayerPet.addEventListener("click", () => {
    const petId = getPetId();
    selectedPet = getSelectedPetInfo(pets, petId);
    if (selectedPet) labelWithPetName(spanPlayerPet, selectedPet.name);
    alert(getSelectedPetMsg(selectedPet));
  });
}

window.addEventListener("load", startGame);
