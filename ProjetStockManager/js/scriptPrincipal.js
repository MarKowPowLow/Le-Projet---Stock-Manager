/* Import de la fonction de création d'utilisateur dans la base de données */

import { createUser } from "./fonctionsCRUDFirebase.js";

/* Création d'un bouton (pour éviter une création d'utilisateur a chaque chargement - a des fins de test - a virer si inutile) */

let body = document.querySelector("body")
let button = document.createElement("button")
button.textContent = "GO !"
body.appendChild(button)

/* Expressions réguliéres pour tester la bonne saisie des champs email et mot de passe */

let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+")
let passwordRegExp = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}:;<>,.?~_+=|-]).{8,32}$")

/* variables de test email et mots de passe qui seront changées par la suite par la valeur input.value */

let mail = "test@mail.com"
let password = "Password!0*"

/* Ecouteur d'événement pour envoyer le compte créé en base de donnée (préciser mail et un mdp en paramétre) */

button.addEventListener("click", () => {

    if (emailRegExp.test(mail)) {

        if (passwordRegExp.test(password)) {

            let user = createUser(mail, password);

        } else {

            alert("Mot de passe invalide (doit contenir entre 8 et 32 caractéres, doit contenir un chiffre, une majuscule, une minucule et un caractére spécial (*.!@$%^&(){}:;<>,.?~_+=|-) !")

        }

    } else {

        alert("Nom/format d'email invalide !")

    }

})


