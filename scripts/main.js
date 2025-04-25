// ==============================
// 🌱 Sélection des éléments
// ==============================
const myAge = document.querySelector('.age');
const checkBt = document.querySelector('.check');
const result = document.querySelector('.result');

// ==============================
// 🧲 Événements
// ==============================

checkBt.addEventListener('click', function(e) {
  e.preventDefault();
  if (!myAge.value) {
    result.textContent = "Merci de remplir votre âge !";
  } else {
    if (myAge.value >= 0 && myAge.value <= 120) {
      (myAge.value >= 18) ? result.textContent = `Vous avez ${myAge.value} ans et vous êtes majeur !` : result.textContent = `Vous avez ${myAge.value} ans et vous êtes mineur !`;;
    } else {
      result.textContent = "Veuillez entrer un âge entre 0 et 120 ans";
    }
    myAge.value = "";
    myAge.select();
  }
});