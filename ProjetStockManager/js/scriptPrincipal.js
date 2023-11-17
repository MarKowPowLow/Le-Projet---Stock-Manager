/* Importations */

import { creationEtAjoutUser, // Fonction de création d'utilisateur avec ajout en BDD FireStore.

} from "./fonctionsDeGestion.js";

let user = creationEtAjoutUser("users","bob@mail.com","Passw0rd!",1)

