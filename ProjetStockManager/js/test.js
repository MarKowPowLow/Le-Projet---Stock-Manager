import{objetConstructeur  /*affichagePopUpModifObjet, ajoutBackgroundFlou*/} from "./fonctionsContruction.js"
import{verifRegex} from "./ControleSaisieUsers.js"
import { obtenirTouteLaCollection, mettreAJourUnDocument, supprimerUnDocument,  } from "./fonctionsCRUDFirebase.js";
// ---------------------------------- Variables Globale ----------------------//


// Création conteneur Top Bar
let topBar = document.createElement("div");
topBar.classList.add("topbar");
document.body.appendChild(topBar);


// Création boutons et zone recherche
let gestionUtilisateurButton = document.createElement("div");
gestionUtilisateurButton.textContent = "Gestion utilisateurs";
gestionUtilisateurButton.classList.add("topbutton")
topBar.appendChild(gestionUtilisateurButton);


let gererCategories = document.createElement("div");
gererCategories.textContent = "Gérer les catégories";
gererCategories.classList.add("topbutton");
topBar.appendChild(gererCategories);


let recherche = document.createElement("input");
recherche.setAttribute("type", "search");
recherche.id = "recherche";
topBar.appendChild(recherche);


let submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.id = "submit";
topBar.appendChild(submit);




// Création Div Inputs
let divInput = document.createElement("div");
divInput.classList.add("divinput");
document.body.appendChild(divInput);


// Création des Input

let tableauObjectDeChamp = [
    {nom:"Nom", type:"text"},
    {nom:"Référence", type: "text"},
    {nom:"Quantité",type: "number", step:"1"},
    {nom:"Catégorie", type: "text"},
    {nom:"Prix",type: "number", step:"0.01", check:true},
    {nom:"Date", type:"date", check:false},
    {nom:"SousCatégorie", type:"text", check:false},
    {nom:"Unite", type:"text", check:false}
]

for(let champ of tableauObjectDeChamp) {
    if(champ.check!==false) {
    let inputProduit = document.createElement("input");
    inputProduit.setAttribute("type", champ.type);
    inputProduit.setAttribute("placeholder", champ.nom);
    inputProduit.setAttribute("id", champ.nom)
    divInput.appendChild(inputProduit);
    };
}

let validButton = document.createElement("img");
validButton.src = "./img/Cercle-valider.svg";
validButton.className = "imagevalider";
validButton.id = "ajout_BDD";
divInput.appendChild(validButton);

// Création conteneur liste

let conteneurList = document.createElement("div");
conteneurList.classList.add("conteneurliste")
conteneurList.id = "conteneurliste"
document.body.appendChild(conteneurList);

// Création conteneur depuis la BDD.

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
    //console.log(champ);

    /* let supprimeButton = document.createElement("img");
    supprimeButton.src = "./img/trash-can-regular.svg";
    supprimeButton.className = "imagesupprimer";
    supprimeButton.id = "supprime_BDD";
    divChamp.appendChild(supprimeButton);

    let supprimerCollection = divChamp.getElementById("supprime_BDD");
    supprimerCollection.addEventListener("click", () => {
        supprimerUnDocument(tableObject[cat], tableObject[ref]);
        divChamp.removeChild(divConteneur);
        //objetDEConstructeur(tableauObjectDeChamp);
        }); */
};

// Création écouteur événement bouton valider

/*validButton.addEventListener("click", () => {
    objetConstructeur()

   /* listeobjet = document.createElement("div");
    listeobjet.classList.add("listeobjet");
    conteneurList.appendChild(listeobjet);
    objetConstructeur()
    // Creation des divs contenant la valeur des inputs
   
    objetProduit = document.createElement("div");
    objetProduit.textContent = inputProduit.value;
    listeobjet.appendChild(objetProduit);

    objetReference = document.createElement("div");
    objetReference.textContent = inputReference.value;
    listeobjet.appendChild(objetReference);

    objetQuantite = document.createElement("div");
    objetQuantite.textContent = inputQuantite.value;
    listeobjet.appendChild(objetQuantite);

    objetCategorie = document.createElement("div");
    objetCategorie.textContent = inputCategorie.value;
    listeobjet.appendChild(objetCategorie);

    deleteButtonConteneurListe = document.createElement("img");
    deleteButtonConteneurListe.src ="./img/circle-xmark-regular.svg";
    deleteButtonConteneurListe.className = "imagesupprimer";
    listeobjet.appendChild(deleteButtonConteneurListe);
})*/

validButton.addEventListener("click", () => {
    verifRegex()
}) 

export{tableauObjectDeChamp}