import { inputProduit, inputReference, inputQuantite } from "./champsdesaisie.js"

function verifRegex() {

    function saisieProduit(inputProduit) {
        const regexProduit = new RegExp("/[a-zA-Z0-9éèàçôûîêâù]/");
        if (regexProduit.test(inputProduit) === false) {
            window.alert("Vous avez entré des caractères incorrect")
            return
        }
    }

    function saisieReference(inputReference) {
        const regexReference = new RegExp("/[a-zA-Z0-9éèàçôûîêâù]/");
        if (regexReference.test(inputReference) === false) {
            window.alert("Vous avez entré des caractères incorrect")
            return
        }
    }

    function saisieQuantite(inputQuantite) {
        const regexQuantite = new RegExp("/[0-9]/");
        if (regexReference.test(inputQuantite) === false) {
            window.alert("Vous avez entré des caractères incorrect")
            return
        }
    }
}
export { verifRegex }