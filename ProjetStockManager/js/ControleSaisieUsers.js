import { objetConstructeur } from "./fonctionsContruction.js";

function verifRegex() {

    // Input Nom
let inputNom = document.getElementById("Nom")

if (inputNom.value == "") {

    window.alert("Il manque des caractères non ?")
    return false;

} else {

    const regexNom = new RegExp("^([A-Za-z0-9À-ÖÙ-öù-ÿ\\s])*$","g");
    if (regexNom.test(inputNom.value) === false) {
        window.alert("Vous avez entré des caractères incorrect (Pas de caractères spéciaux).")
        return false;
    }
    }

    // Référence
let inputRéférence = document.getElementById("Référence")

if (inputRéférence.value == "") {

    window.alert("Il manque des caractères non ?")
    return false;

} else {

    const regexReference = new RegExp("^([A-Z0-9])*$","g");
    if (regexReference.test(inputRéférence.value) === false) {
        window.alert("Vous avez entré des caractères incorrect (Lettres Majuscules/Chiffres seulement).")
        return false}
    }


    // Quantité
let inputQuantité = document.getElementById("Quantité")

if (inputQuantité.value == "") {

    window.alert("Il manque des caractères non ?")
    return false;

} else {

    const regexQuantite = new RegExp("^([0-9])*$","g");
    if (regexQuantite.test(inputQuantité.value) === false) {
        window.alert("Vous avez entré des caractères incorrect (Chiffres seulement).")
        return false;
    }
    }

/*
    // Catégorie
let inputCatégorie = document.getElementById("Catégorie")

if (inputCatégorie.value == "") {

    window.alert("Il manque des caractères non ?")
    return;

} else {

    const regexCategorie = new RegExp ("^([A-Za-zÀ-ÖÙ-öù-ÿ\\s])*$","g");
    if (regexCategorie.test(inputCatégorie.value) === false) {
        window.alert("Vous avez entré des caractères incorrect (Lettres seulement).")
        return}
    }


    // prix
let inputprix = document.getElementById("prix")

if (inputprix.value == "") {

    window.alert("Il manque des caractères non ?")
    return;

} else {

    const regexPrix = new RegExp ("^([0-9]{0,})*[,.]([0-9]{2})*$","g");
    if (regexPrix.test(inputprix.value) === false) {
        window.alert("Vous avez entré des caractères incorrect (Chiffres = * | ***.**)).")
        return}
    }


    // sousCatégorie
let inputsousCatégorie = document.getElementById("sousCatégorie")

if (inputsousCatégorie.value == "") {

    window.alert("Il manque des caractères non ?")
    return;

} else {

    const regexSousCategorie = new RegExp ("^([A-Za-zÀ-ÖÙ-öù-ÿ\\s])*$","g");
    if (regexSousCategorie.test(inputsousCatégorie.value) === false) {
        window.alert("Vous avez entré des caractères incorrect (Lettres seulement).")
        return}
    }
*/
    //objetConstructeur();

    return true;
}


export { verifRegex }