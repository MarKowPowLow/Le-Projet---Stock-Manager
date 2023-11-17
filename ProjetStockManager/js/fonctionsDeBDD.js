import { ajouterUnObjet  } from "./fonctionsCRUDFirebase.js"

// Function pour le bouton "croix-valider" qui déclenche les fonctions basé sur les inputs.
let ajouterCollection = document.getElementById("cercle_valider");
ajouterCollection.addEventListener("click", () => {
  let obj = creerCollection(tableauDeChamps);
  let dataBase = document.getElementById("Catégorie").value;

  ajouterUnObjet(obj, dataBase);
  viderChampText(tableauDeChamps);
  console.log(obj);
});

// Créer un objet en prenant les valeurs des champs de text
const creerCollection = (tableauDeChamps) => {
  let tabOjet = [];
  let objet = {};
  for (let obj of tableauDeChamps) {
    objet[obj.id] = document.getElementById(obj.id).value;

    tabOjet.push(objet);
  }
  console.log(tabOjet);
  console.log(objet);
  return objet;
};

// Vide les champs de text
const viderChampText = (tableauDeChamps) => {
  for (let obj of tableauDeChamps) {
    let _input = document.createElement("input");
    _input.value = "";
    if (obj.type === "number") {
      _input.value = 0;
    }
  }
};

export {
    ajouterCollection,
}