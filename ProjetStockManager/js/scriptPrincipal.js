/* Importations */

import { ajouterUnObjet, RécupérerObjet } from "./fonctionsCRUDFirebase.js";
import { creationEtAjoutUser, // Fonction de création d'utilisateur avec ajout en BDD FireStore.
         authentificationEtRecupération, // Fontcion de récupération d'un compte
        SupprimerUtilisateur

} from "./fonctionsDeGestion.js";


let test = {
    nom: "Oignon",
    catégorie: "Légumes"
}

let objet = await ajouterUnObjet(test,"test")

//console.log(objet.id)

let variable = await RécupérerObjet("test",objet.id)

console.log("Variable : ",variable)

