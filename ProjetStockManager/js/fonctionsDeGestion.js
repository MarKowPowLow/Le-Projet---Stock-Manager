import { signIn, createUser, obtenirTouteLaCollection, ajouterUnObjet } from "./fonctionsCRUDFirebase.js"


const authentificationEtAjoutRole = async (database, email, password) => {

    const user = await signIn(email, password);
    console.log(user)

    const users = await obtenirTouteLaCollection(database)

    users.forEach(usrs => {

        if (usrs.email === user.user.email) {

            console.log("Match !")

        }

    });

}

const creationEtAjoutUser = async (database, email, password, role) => {

    /* Expressions réguliéres pour tester la bonne saisie des champs email et mot de passe */
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+")
    let passwordRegExp = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}:;<>,.?~_+=|-]).{8,32}$")

    /* Définition d'un objet type a inscrire en base de données */
    let config = {
        email: email,
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

                    console.log(users)

                } else {

                    console.log("Utilisateur non trouvé, création de celui-ci en base.....")

                    const userAccount = await createUser(email, password)

                    const user = await ajouterUnObjet(config, "users")

                    users = await obtenirTouteLaCollection(database)

                    console.log(users)

                }

            });

        } else {

            console.log("Utilisateur non trouvé, création de celui-ci en base.....")

            const userAccount = await createUser(email, password)

            const user = await ajouterUnObjet(config, "users")

            users = await obtenirTouteLaCollection(database)

            console.log(users)

        }

    } else {

        alert("Nom d'utilisateur ou mot de passe incorrect !")

    }
}

export {
    creationEtAjoutUser,
    authentificationEtAjoutRole,
}