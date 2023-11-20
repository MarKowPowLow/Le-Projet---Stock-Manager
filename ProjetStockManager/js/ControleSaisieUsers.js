import { inputProduit, inputReference, inputQuantite, inputCategorie, inputPrix, inputSousCategorie } from "./champsdesaisie.js"

function verifRegex() {

// Produits

    function saisieProduit(inputProduit) {
        const regexProduit = new RegExp("^([A-Za-z0-9À-ÖÙ-öù-ÿ\\s])*$","g");
        if (regexProduit.test(inputProduit) === false) {
            window.alert("Vous avez entré des caractères incorrect (Pas de caractères spéciaux).")
            return
        }
    }

// Références

    function saisieReference(inputReference) {
        const regexReference = new RegExp("^([A-Z0-9])*$","g");
        if (regexReference.test(inputReference) === false) {
            window.alert("Vous avez entré des caractères incorrect (Lettres/Chiffres seulement).")
            return
        }
    }

// Quantités

    function saisieQuantite(inputQuantite) {
        const regexQuantite = new RegExp("^([0-9])*$","g");
        if (regexReference.test(inputQuantite) === false) {
            window.alert("Vous avez entré des caractères incorrect (Chiffres seulement).")
            return
        }
    }
}

// Catégories

    function saisieCategorie(inputCategorie) {
        const regexCategorie = new RegExp ("^([A-Za-zÀ-ÖÙ-öù-ÿ\\s])*$","g");
        if (regexCategorie.test(inputCategorie) === false) {
            window.alert("Vous avez entré des caractères incorrect (Lettres seulement).")
            return
        }
    }

// Prix

function saisiePrix(inputPrix) {
    const regexPrix = new RegExp ("^([0-9]{0,})*[,.]([0-9]{2})*$","g");
    if (regexPrix.test(inputPrix) === false) {
        window.alert("Vous avez entré des caractères incorrect (Chiffres = * | ***.**)).")
        return
    }
}

// Sous-Catégories

function saisieSousCategorie(inputSousCategorie) {
    const regexSousCategorie = new RegExp ("^([A-Za-zÀ-ÖÙ-öù-ÿ\\s])*$","g");
    if (regexSousCategorie.test(inputSousCategorie) === false) {
        window.alert("Vous avez entré des caractères incorrect (Lettres seulement).")
        return
    }
}

export { verifRegex }