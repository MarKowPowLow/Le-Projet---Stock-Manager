import { ajouterUnObjetAvecIdSpécifique  } from "./fonctionsCRUDFirebase.js";
import { tableauObjectDeChamp } from "./variablesGlobales.js";
import { objetConstructeur } from "./fonctionsContruction.js";

// Creer un objet en prenant les valeurs des champs de text
const creerCollection = (tableauObjectDeChamp) => {
  let objet = {};
  for (let obj of tableauObjectDeChamp) {
    //console.log(document.getElementById(obj.nom).value)
    if(document.getElementById(obj.nom) && document.getElementById(obj.nom).value != "on") {
      objet[obj.nom] = document.getElementById(obj.nom).value;
    }
  }
  //console.log(objet)
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
  creerCollection,
}