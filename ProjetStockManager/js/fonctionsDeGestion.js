import { signIn, createUser, obtenirTouteLaCollection, ajouterUnObjet, supprimerUnDocument } from "./fonctionsCRUDFirebase.js"


/* Fonction de création de compte utilisateur dans le composant d'authentification et dans la base FireStore */

const creationEtAjoutUser = async (database, email, password, role) => {

    /* Expressions réguliéres pour tester la bonne saisie des champs email et mot de passe */
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+")
    let passwordRegExp = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}:;<>,.?~_+=|-]).{8,32}$")

    /* Définition d'un objet type a inscrire en base de données */
    let config = {
        email: email,
        password: password,
        role: role,
    }

    let users = await obtenirTouteLaCollection(database)
    let account = await signIn(email, password)
    console.log(users, account)

    if (emailRegExp.test(email) && passwordRegExp.test(password)) {

        if ((users.length > 0) && account) {

            users.forEach(async usrs => {

                if (usrs.email === email) {

                    console.log("Utilisateur déja éxistant en base !")

                    console.error(users)

                } else {

                    console.log("Utilisateur non trouvé, création de celui-ci en base.....")

                    const userAccount = await createUser(email, password)

                    const user = await ajouterUnObjet(config, "users")

                    users = await obtenirTouteLaCollection(database)

                    console.log(users)

                }

            });

        } else {

            console.log("Base vide, création de l'utilisateur en BDD.....")

            const userAccount = await createUser(email, password)

            const user = await ajouterUnObjet(config, "users")

            users = await obtenirTouteLaCollection(database)

            console.log(users)

        }

    } else {

        alert("Nom d'utilisateur ou mot de passe incorrect !")

    }
}


/* Fonction de récupération du compte utilisateur connécté, avec comparaison entre celui-ci et son équivalent 
    en base FireStore pour avoir accés à ses propriétés d'objets */

const authentificationEtRecupération = async (database, email, password) => {
    let test = null;
    /* constante qui récupére la connexion utilisateur par le biais de la fonction signIn*/
    const account = await signIn(email, password)
    console.log("account : ", account)

    /* constante qui récupére tout les utilisateurs enregistrés sur FireStore par le biais de la fonction
        obtenirTouteLaCollection */
    const users = await obtenirTouteLaCollection(database)
    //console.log("database : ", users)

    if (account) {

        /* Condition de vérification "SI la base de données FireStore n'est pas vide ET si la connexion renvoie bien 
            quelquechose..." */
        if ((users.length > 0)) {

            /* Boucle de parcours du tableau de la collection users renvoyée par la fonction obtenirTouteLaCollection */
            users.forEach(usrs => {

                if ((usrs.email === account.user.email)) {

                    //console.log("OK !")
                    test = usrs;
                    return usrs

                } else {

                    console.log("Erreur ! Utilisateur trouvé dans le Auth, mais absent de la BDD ! Ajoutez l'utilisateur dans la BDD  via la fonction AjouterObjet ou via l'interface graphique !")
                    console.error(users)

                }

            });
        } else {

            console.log("Erreur ! BDD vide !")
            console.error(users)

        }

    } else {

        console.error("Source : authentificationEtRecupération : 'Utilisateur Inconnu'")
        // Création de div "Utilisateur inconnu" ?

    }
    return test;
}

/* Fonction de suppression d'un utilisateur en base de données */

const SupprimerUtilisateur = async (database, email, id) => {

    const users = obtenirTouteLaCollection(database)

    users.forEach(usrs => {

       if ((usrs.email === email) && (usrs.id === id)) {

            // Fenêtre DIALOG/confirm ?
        
       }


        
        
    });

}

export {
    creationEtAjoutUser,
    authentificationEtRecupération,
    SupprimerUtilisateur
}