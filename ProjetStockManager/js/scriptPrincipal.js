/* Importations */

import { creationEtAjoutUser, // Fonction de création d'utilisateur avec ajout en BDD FireStore.
         authentificationEtRecupération, // Fontcion de récupération d'un compte

} from "./fonctionsDeGestion.js";

let xx = await authentificationEtRecupération("users","admin@mail.com","Passw0rd!")

console.log("user : ",xx)

