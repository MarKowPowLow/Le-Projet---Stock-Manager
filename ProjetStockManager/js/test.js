import{objetConstructeur, /*affichagePopUpModifObjet, ajoutBackgroundFlou*/} from "./fonctionsContruction.js"
// ---------------------------------------------------------------------------- Variables Globale -------------------------------------------------------------------------------//


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
    {nom :"Nom", type:"text"},
    {nom: "Référence", type: "text"},
    {nom:"Quantité",type: "number", step:"1"},
    {nom: "Catégorie", type: "text", check: false},
    {nom: "prix",type: "number", step:"0.01", check:false},
    {nom:"date", type:"date", check:false},
    {nom:"sous catégorie", type:"text", check:false},
    {nom:"Unité", type:"text", check:false}
]

for(let champ of tableauObjectDeChamp) {
    if(champ.check!==false)

    {let inputProduit = document.createElement("input");
    inputProduit.setAttribute("type", champ.type);
    inputProduit.setAttribute("placeholder", champ.nom);
    inputProduit.setAttribute("id", champ.nom)
    divInput.appendChild(inputProduit);}
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



// Création écouteur événement bouton valider
validButton.addEventListener("click", () => {
    objetConstructeur() 

   /* listeobjet = document.createElement("div");
    listeobjet.classList.add("listeobjet");
    conteneurList.appendChild(listeobjet);
    objetConstructeur()
    // Création des divs contenant la valeur des inputs
   
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
    listeobjet.appendChild(deleteButtonConteneurListe)*/;
})

export{tableauObjectDeChamp}

