import { ajouterUnObjet  } from "./fonctionsCRUDFirebase.js";
import { tableauObjectDeChamp } from "./test.js";
import { objetConstructeur } from "./fonctionsContruction.js"

// Function pour le bouton "croix-valider" qui declenche les fonctions base sur les inputs.
let ajouterCollection = document.getElementById("ajout_BDD");
ajouterCollection.addEventListener("click", () => {
  let obj = creerCollection(tableauObjectDeChamp);
  let dataBase = document.getElementById("Catégorie").value;

  ajouterUnObjet(obj, dataBase);
  objetConstructeur(tableauObjectDeChamp)
  //viderChampText(tableauObjectDeChamp);
});

// Creer un objet en prenant les valeurs des champs de text
const creerCollection = (tableauObjectDeChamp) => {
  let objet = {};
  for (let obj of tableauObjectDeChamp) {
    if(document.getElementById(obj.nom)){
      objet[obj.nom] = document.getElementById(obj.nom).value;
    }
  }
  console.log(objet);
  return objet;
};

// Prototype: Function pour obtenir les "Categories" pour appeler la base de donnée.
/* const telechargerCollection = (tableauObjectDeChamp) =>{
  let categorieName = "";
  for (let obj of tableauObjectDeChamp) {
    if(document.getElementById(obj.Categorie)){
      categorieName[obj.Categorie] = obj.Categorie.value;
    }
    console.log(categorieName);
    return categorieName;
  }
  let tableauObjectBDD = await obtenirTouteLaCollection("Fruits");
}*/


export {
  ajouterCollection,
}