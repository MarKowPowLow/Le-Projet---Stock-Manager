import { tableauObjectDeChamp } from "./variablesGlobales.js"
import { RécupérerObjet, ajouterUnObjet, mettreAJourDocumentsAvecValeurParticulière } from "./fonctionsCRUDFirebase.js"
let popUpTab;
let popUpModifObjet
let popUpButton
let popUpClose
let popUpInput
let popUpLine
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

async function objetConstructeur() {
    let obj = {}
    let conteneurliste = document.getElementById("conteneurliste")

    //récupération des valeurs des inputs
    for (let ob in tableauObjectDeChamp) {
        let temp = document.getElementById(tableauObjectDeChamp[ob].nom)
        if (temp !== null) {
            obj[temp.id] = temp.value
            temp.value = ""
        }
    }

    let objet = await ajouterUnObjet (obj, obj.Catégorie)
    console.log(typeof(objet.id))

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
    popUpModifObjet = document.createElement('div');
    popUpModifObjet.id = 'popUpModifObjet'


    flou.appendChild(popUpModifObjet)
    interaction(target)
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

async function interaction(target){
    popUpTab =creerUnElement("popUpTab","div", popUpModifObjet)


//Apparition des lignes en fonction du tableau "tableauObjectDeChamp"

    //recuprération de l'objet en fonction du nom de la ligne
let objet  = await RécupérerObjet (target.children[3].textContent, target.id);
console.log(objet)
let tabObjet =[]
for(let valeur in objet){
    tabObjet.push(valeur)
}
console.log(tabObjet)
for(let element in tableauObjectDeChamp){
    creerUneLigne();
    popUpPropriete.textContent = tableauObjectDeChamp[element].nom;
    popUpInput.placeholder = objet[element]
}
//commentaire
// ###### pop up button ##########
popUpButton =creerUnElement("popUpButton","div", popUpModifObjet)


    //##### pop up Modify #####
    popUpModify= creerUnElement("popUpModify","button", popUpButton)
    popUpModify.textContent = "Modifier"
    //##### pop up Supp ######
    popUpSupp =creerUnElement("popUpSupp", "button",popUpButton)
    popUpSupp.textContent = "Supprimer"
    //###### pop up Close ######
    popUpClose =creerUnElement("popUpClose", "button", popUpButton)
    popUpClose.textContent = "Annuler"
}

// ###### pop up #########


export { constructeurContainerPrincipal, objetConstructeur, affichagePopUpModifObjet, ajoutBackgroundFlou }

