import{objetConstructeur} from "./fonctionsContruction.js"
import{tableauObjectDeChamp, choixInput} from "./variablesGlobales.js";
import{verifRegex} from "./ControleSaisieUsers.js"
import{obtenirTouteLaCollection, mettreAJourUnDocument, supprimerUnDocument} from "./fonctionsCRUDFirebase.js";

let divInput;
let conteneurList;

// Création conteneur Top Bar
let topBar = document.createElement("div");
topBar.classList.add("topbar");
document.body.appendChild(topBar);


// Création boutons et zone recherche
let gestionUtilisateurButton = document.createElement("div");
gestionUtilisateurButton.textContent = "Gestion utilisateurs";
gestionUtilisateurButton.classList.add("topbutton")
topBar.appendChild(gestionUtilisateurButton);

    // Création écouteur événement pour changer de page

    gestionUtilisateurButton.addEventListener("click", () => {
        document.location.href='gestionUtilisateur.html';
    })


let gererCategories = document.createElement("div");
gererCategories.textContent = "Administration";
gererCategories.classList.add("topbutton");
topBar.appendChild(gererCategories);

//--------------------------------------------------- DIV POP UP ADMIN --------------------------------------------------------------//

// Création div barrière (pour empêcher la personne de pouvoir intéragir avec le site en arrière plan quand le pop-up admin est ouvert)
let glass = document.createElement("div");
glass.classList.add("glass");


// Création de la div Pop-up
let adminPopUp = document.createElement("div");
adminPopUp.className = "adminpopuphidden";
document.body.appendChild(adminPopUp);

    // Création d'une div pour contenir les élément du haut de la div Pop-up
    let adminPopUpTopDiv = document.createElement("div");
    adminPopUpTopDiv.classList.add("adminpopuptopdiv");
    adminPopUp.appendChild(adminPopUpTopDiv);

        // Création bouton supprimer la collection
        let viderCollection = document.createElement("div");
        viderCollection.classList.add("vidercollectionbouton");
        viderCollection.textContent = "Supprimer la collection";
        adminPopUpTopDiv.appendChild(viderCollection);

        // Création bouton fermer la page
        let fermerPopUp = document.createElement("img");
        fermerPopUp.src ="./img/circle-xmark-regular.svg";
        fermerPopUp.classList.add("imagesupprimer");
        adminPopUpTopDiv.appendChild(fermerPopUp);

            //Création écouteur événement fermeture Pop-up
            fermerPopUp.addEventListener("click", () => {
                adminPopUp.classList.toggle("adminpopupvisible");
                glass.remove();
                return;
            })

    // Création input sélecteur pour choisir la collection sur laquelle on veut intéragir        
    let choixCollection = document.createElement("select");
    choixCollection.setAttribute("id", "mySelect");
    choixCollection.classList.add("inputadminpopup");
    adminPopUp.appendChild(choixCollection);

    for (let i = 0; i < choixInput.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", choixInput[i]);
        option.text = choixInput[i];
        choixCollection.appendChild(option);
    }

    // Création div conteneur check box

    let CheckBoxContainer = document.createElement("div");
    CheckBoxContainer.classList.add("adminpopupdivcheckbox");
    adminPopUp.appendChild(CheckBoxContainer);

        for(let champ of tableauObjectDeChamp) {

            let divCheckBox = document.createElement("div");
            divCheckBox.classList.add("divcheckbox");
            CheckBoxContainer.appendChild(divCheckBox);

            let textCheckBox = document.createElement("p");
            textCheckBox.textContent = champ.nom;
            console.log(champ.check)
            if(champ.check !==undefined){
                let checkBox = document.createElement("input");
                checkBox.type = "checkbox"
                checkBox.id = champ.nom;
                divCheckBox.appendChild(checkBox);

    // Création écouteur événement check box

    checkBox.addEventListener("click", () => {
                toggleCheckBox(checkBox.id)
            })
    
            }
    divCheckBox.appendChild(textCheckBox);
}

// Création écouteur événement pour faire apparaître la fenêtre Pop-up Administration
gererCategories.addEventListener("click", () => {
    
    adminPopUp.classList.toggle("adminpopupvisible");
    document.body.appendChild(glass);
})

//---------------------------------------------------- FIN DIV POP UP ADMIN ---------------------------------------------------//

let divRecherche = document.createElement("div");
topBar.appendChild(divRecherche);

    let recherche = document.createElement("input");
    recherche.setAttribute("type", "search");
    recherche.id = "recherche";
    divRecherche.appendChild(recherche);


    let submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.id = "submit";
    divRecherche.appendChild(submit);


//---------------------------------------------------- CREATION FONCTIONS -------------------------------------------------------//

    function creationDivIput () {

        // Création Div Inputs
        divInput = document.createElement("div");
        divInput.classList.add("divinput");
        document.body.appendChild(divInput);
    

        // Création des Input
        for(let champ of tableauObjectDeChamp) {
            if(champ.check!==false) {

                let inputProduit = document.createElement("input");
                inputProduit.setAttribute("type", champ.type);
                inputProduit.setAttribute("placeholder", champ.nom);
                inputProduit.setAttribute("id", champ.nom)
                divInput.appendChild(inputProduit);
            }
        }

        // Création bouton valider
        let validButton = document.createElement("img");
        validButton.src = "./img/Cercle-valider.svg";
        validButton.className = "imagevalider";
        divInput.appendChild(validButton);

        // Création écouteur événement bouton valider
        validButton.addEventListener("click", () => {
            objetConstructeur();
            
        })
    }
    
    
// 1ère appel de la fonction (pour que celle-ci apparaisse)
creationDivIput()



function toggleCheckBox (input) {
    console.log(input)
    console.log(tableauObjectDeChamp)
    for(let champ in tableauObjectDeChamp){
    if (tableauObjectDeChamp[champ].nom === input){
    tableauObjectDeChamp[champ].check = !tableauObjectDeChamp[champ].check


    suppressionDivInput()
    suprimerContenaireListe()
    creationDivIput()
    creerContenaireListe()
}}}



    
// Création conteneur liste

function creerContenaireListe (){ 
conteneurList = document.createElement("div");
conteneurList.classList.add("conteneurliste")
conteneurList.id = "conteneurliste"
document.body.appendChild(conteneurList);
}



function suppressionDivInput(){
    divInput.remove()
}



function suprimerContenaireListe(){
    conteneurList.remove()
}

creerContenaireListe()


let tableauObjectBDD = await obtenirTouteLaCollection("Fruits");

// Formater un Tableau d'object pour mettre la collection dans l'ordre
for(let champ of tableauObjectBDD) {
    console.log(champ);
    let tableObject = {
        nom: champ.Nom,
        ref: champ.Référence,
        qte: champ.Quantité,
        cat: champ.Catégorie,
        prix: champ.Prix,
        date: champ.Date,
        sCat: champ.SousCatégorie,
        unite: champ.Unite,
        };
    console.log(tableObject)
    let divChamp = document.createElement("div");
    divChamp.classList.add("divChamp");

    Object.keys(tableObject).forEach(element => {
       //console.log(champ[element])
        if (tableObject[element] != undefined){
        let divConteneur = document.createElement("div");
        divConteneur.classList.add("divConteneur");
        divConteneur.setAttribute("id", element);
        divConteneur.textContent = tableObject[element];
        divChamp.appendChild(divConteneur);
        };
    });

    conteneurList.appendChild(divChamp);
}

validButton.addEventListener("click", () => {
    verifRegex()
}) 

//---------------------------------------------- EXPORT --------------------------------------------------------//

export{tableauObjectDeChamp}
export{choixInput}