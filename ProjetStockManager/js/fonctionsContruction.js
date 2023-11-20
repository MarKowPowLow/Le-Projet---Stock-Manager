import { tableauObjectDeChamp } from "./test.js"
import { trouverDocumentsAvecValeur, ajouterUnObjet, mettreAJourDocumentsAvecValeurParticulière } from "./fonctionsCRUDFirebase.js"
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
//######   construction de la ligne enfants contenant les information saisi.#############

function objetConstructeur() {
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

    //création des lignes du tableau et complétion en fonction des valeurs de l'objet 

    let parentLigne = document.createElement("div")
    parentLigne.classList.add("listeobjet")
    parentLigne.id = `ligne${ligneNumber}`
    parentLigne.addEventListener("click", () => {
        ligneNumber++
        affichagePopUpModifObjet()
        return ligneNumber
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
function affichagePopUpModifObjet() {
    ajoutBackgroundFlou()
    popUpModifObjet = document.createElement('div');
    popUpModifObjet.id = 'popUpModifObjet'


    flou.appendChild(popUpModifObjet)
    interaction()
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

function interaction(){
    popUpTab =creerUnElement("popUpTab","div", popUpModifObjet)

console.log(popUpTab,popUpModifObjet,"****")



        // ##### pop up col 1 #####

            creerUneLigne()

        // ##### pop up col 2 #####

            creerUneLigne()

// ###### pop up button ##########
popUpButton =creerUnElement("popUpButton","div", popUpModifObjet)

    //##### pop up Modify #####
    popUpModify= creerUnElement("popUpModify","button", popUpButton)

    //##### pop up Supp ######
    popUpSupp =creerUnElement("popUpSupp", "button",popUpButton)

    //###### pop up Close ######
    popUpClose =creerUnElement("popUpClose", "button", popUpButton)
}

// ###### pop up #########


export { constructeurContainerPrincipal, objetConstructeur, affichagePopUpModifObjet, ajoutBackgroundFlou }

