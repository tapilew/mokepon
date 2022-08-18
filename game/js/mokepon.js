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

function getRandomPet(petsList) {
  const randomIndex = random(0, petsList.length - 1);
  return petsList[randomIndex];
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
  const spanEnemyPet = document.getElementById("enemy-pet");
  let playerPet;
  let enemyPet;
  btnPlayerPet.addEventListener("click", () => {
    const petId = getPetId();
    playerPet = getSelectedPetInfo(pets, petId);
    if (playerPet) {
      enemyPet = getRandomPet(pets);
      labelWithPetName(spanPlayerPet, playerPet.name);
      labelWithPetName(spanEnemyPet, enemyPet.name);
    }
    alert(getSelectedPetMsg(playerPet));
    if (enemyPet)
      alert(
        "Enemy has selected " +
          `${enemyPet.name.toUpperCase()}! ${enemyPet.emoji}`
      );
  });
}

window.addEventListener("load", startGame);
