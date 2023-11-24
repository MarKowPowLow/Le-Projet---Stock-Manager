import { tableauObjectDeChamp } from "./variablesGlobales.js"
import { creerCollection } from "./fonctionsDeBDD.js"
import { RécupérerObjet, ajouterUnObjetAvecIdSpécifique, mettreAJourDocumentsAvecValeurParticulière,supprimerUnDocument } from "./fonctionsCRUDFirebase.js"
let popUpTab;
let popUpModifObjet
let popUpButton
let popUpClose
let popUpInput
let popUpLigne
let popUpModify
let popUpPropriete
let popUpSupp

//assignation de la valeur 0 à la ligneNumber
let ligneNumber = 0
//constructeur container principal
let flou = document.createElement("div")
const constructeurContainerPrincipal = (text) => {
    const containerPrincipal = document.createElement("div");
    containerPrincipal.textContent = text;



    return containerPrincipal;


}
//######   construction de l'Objet contenant les information saisi.#############

function objetConstructeur() {
    let obj = creerCollection(tableauObjectDeChamp);
    let conteneurliste = document.getElementById("conteneurliste")

    /*//récupération des valeurs des inputs
    for (let ob in tableauObjectDeChamp) {
        let temp = document.getElementById(tableauObjectDeChamp[ob].nom)
        if (temp !== null) {
            obj[temp.id] = temp.value
            temp.value = ""
        }
    }*/
    

    let objet = ajouterUnObjetAvecIdSpécifique(obj, obj.Catégorie, obj.Référence);
    //console.log(typeof(obj.id));
    //console.log(obj);

    let parentLigne = document.createElement("div")
    parentLigne.classList.add("listeobjet")
    parentLigne.id = objet.id
    ligneNumber++
    parentLigne.addEventListener("click", (e) => {
        affichagePopUpModifObjet(e)
    })
    conteneurliste.appendChild(parentLigne)


    //création des éléments correspondants aux propriétés et aux valeurs associés des inputs
    for (let temp in obj) {

        let enfantLigne = document.createElement("div")
        enfantLigne.textContent = obj[temp]
        parentLigne.appendChild(enfantLigne)

    }
}

//création des fonction permettant l'apparition des fenêtres popUp
function ajoutBackgroundFlou() {

    flou.className = "flou"
    document.body.appendChild(flou)

}
//ajout de la fonction pour afficher le popUp sur le flou
function affichagePopUpModifObjet(e) {
    let target = e.target;
    ajoutBackgroundFlou()

    if(!document.getElementById("popUpModifObjet")){
        popUpModifObjet = document.createElement('div');
        popUpModifObjet.id = 'popUpModifObjet'
        
    }



    flou.appendChild(popUpModifObjet)
    interaction (target)
    //trouverDocumentsAvecValeur()


}

//################ Contenu de la fenêtre PopUp #####################//


function remplissagePopUpModif() {
    document.createElement("div")
}

function creerUnElement( classe, typeElement, elementParent){
// fonction de création d'objet, pour l'utiliser : 
// test = creerUnElement("classeduTest", "typedebaliseduTest", element ou arrive le test)

   let  elementcree = document.createElement(typeElement)
    elementcree.className = classe
    elementParent.appendChild(elementcree)

    return elementcree
}
function creerUneLigne(){
                // ##### pop up line #####
                popUpLine = creerUnElement( "popUpLine","div", popUpTab)

                //#### pop up propriété ##### 
                popUpPropriete= creerUnElement("popUpPropriete","div",popUpLine)

                // ##### pop up input #####
                popUpInput =creerUnElement("popUpInput","input", popUpLine)
}

// ###### Pop up tableau #########

function interaction(target){
    let objet  = RécupérerObjet (target.children[3].textContent, target.id);  //récupération de l'objet
    for(let temp in tableauObjectDeChamp){  //On utilise un boucle pour le contenus du pop-Up
        let parram = (tableauObjectDeChamp[temp].nom);  //Création d'une variable contenant la propriété en cours
        popUpLigne = document.createElement('div'); //Création de la ligne
        popUpLigne.classList.add('popUpLigne'); //Attibution de la classe à la ligne
        popUpPropriete = document.createElement('div'); //Création de champ propriété
        popUpPropriete.classList.add('popUpPropriete'); //Attibution de la classe au champ propiété
        popUpPropriete.textContent = parram;    //Insserssion du nom de la propriété dans la 'div' proprité
        popUpInput = document.createElement('input');   //création de l'input
        popUpInput.classList.add('popUpInput'); //Attibution de la classe à l'input
        switch(parram){ //création du placeHolder en fonction de la propiété traité dans la boucle
            case 'Nom' : popUpInput.placeholder = objet.Nom
            break;
            case 'Référence' : popUpInput.placeholder = objet.Référence
            break;
            case 'Quantité' : popUpInput.placeholder = objet.Quantité
            break;
            case 'Catégorie' : popUpInput.placeholder = objet.Catégorie
            break;
            case 'prix' : popUpInput.placeholder = objet.prix
            break;
            case 'date' : popUpInput.placeholder = objet.date
            break;
            case 'sousCatégorie' : popUpInput.placeholder = objet.sousCatégorie
            break;
            case 'Unité' : popUpInput.placeholder = objet.Unité
            break;
        }
        popUpLigne.appendChild(popUpPropriete)  //inssertion du nom de la propriété dans la ligne
        popUpLigne.appendChild(popUpInput)  //inssertion de l'input dans la ligne 
        popUpModifObjet.appendChild(popUpLigne) //inssertion de la ligne dans le pop up
    }
    // création du contener des boutons et des différents boutons
    popUpButton = document.createElement('div')
    popUpModify = document.createElement('div')
    popUpSupp = document.createElement('div')
    popUpClose = document.createElement('div')
    //Attribution des classes au différentes div
    popUpButton.classList.add('popUpButton')
    popUpModify.classList.add('popUpModify')
    popUpSupp.classList.add('popUpSupp')
    popUpClose.classList.add('popUpClose')
    //Ajout d'un text Content au boutons////////////////(A REMPLACER PAR DES ICONES)
    popUpModify.textContent = "Valid"
    popUpSupp.textContent = "Supp"
    popUpClose.textContent = "close"
    //Création des listeners sur les boutons
    popUpModify.addEventListener("click",()=>{
        for(let i in objet){
            console.log(`${objet[i].value}`)
        }
    })
    popUpSupp.addEventListener("click",()=>{
        supprimerUnDocument(objet.Catégorie, objet.id)
        target.remove()
        closePopUp()
    })
    popUpClose.addEventListener("click",()=>{
        closePopUp ()
    })
    //Implémentation des boutons dans le popUp
    popUpModifObjet.appendChild(popUpButton)
    popUpButton.appendChild(popUpModify)
    popUpButton.appendChild(popUpSupp)
    popUpButton.appendChild(popUpClose)
}
function closePopUp (){
   while(flou.firstChild){
    flou.removeChild(flou.firstChild)
   }
    flou.remove()
}

// ###### pop up #########


export { constructeurContainerPrincipal, objetConstructeur, affichagePopUpModifObjet, ajoutBackgroundFlou }

