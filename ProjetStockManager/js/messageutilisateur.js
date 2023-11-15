import { fonctionBouton } from "./boutons.js";

let buttonValider = {
  type: "div",
  class: "bouton",
  text: "Valider",
};
let buttonAnnuler = {
  type: "div",
  class: "bouton",
  text: "Annuler",
};

const functionboutonValider = function () {
  divprincipale.remove();
  validation = true;
  return validation;
};

const functionboutonAnnuler = function () {
  divprincipale.remove();
  validation = false;
  return validation;
};

const messageUtilisateur = function () {
  divprincipale = document.createElement("div");
  divprincipale.className = "validationAbsolue";
  divValider = fonctionBouton(buttonValider, functionboutonValider);
  divAnnuler = fonctionBouton(buttonAnnuler, functionboutonAnnuler);
  document.body.appendChild(divprincipale);
  divprincipale.appendChild(divValider);
  divprincipale.appendChild(divAnnuler);
};

export { messageUtilisateur };
