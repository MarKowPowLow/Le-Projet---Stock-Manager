import { ajouterUnObjetAvecIdSpécifique  } from "./fonctionsCRUDFirebase.js";
import { tableauObjectDeChamp } from "./test.js";
import { objetConstructeur } from "./fonctionsContruction.js"

// Function pour le bouton "croix-valider" qui declenche les fonctions base sur les inputs.
let ajouterCollection = document.getElementById("ajout_BDD");
ajouterCollection.addEventListener("click", () => {
  let obj = creerCollection(tableauObjectDeChamp);
  let dataBase = document.getElementById("Catégorie").value;

  ajouterUnObjetAvecIdSpécifique(obj, dataBase, obj.Référence);
  objetConstructeur(tableauObjectDeChamp);
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

/* let supprimerCollection = document.getElementById("supprime_BDD");
supprimerCollection.addEventListener("click", () => {
  let obj = creerCollection(tableauObjectDeChamp);
  let dataBase = document.getElementById("Catégorie").value;

  supprimerUnDocument(obj, dataBase);
  objetConstructeur(tableauObjectDeChamp);
}); */

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