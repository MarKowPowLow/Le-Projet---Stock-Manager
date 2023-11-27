import { authentificationEtRecupération } from "./fonctionsDeGestion.js";

let inputMail = document.getElementById("email") 

let inputPassword = document.getElementById("password")

let button = document.getElementById("connexion")

button.addEventListener("click", async () => {

    let user = await authentificationEtRecupération("users",inputMail.value,inputPassword.value)

    console.log(user)

    if (user) {

        document.location.href = "./index.html"

    } else {

        alert("Nom d'utilisateur ou mot de passe inconnu de la base de données")

    }

})