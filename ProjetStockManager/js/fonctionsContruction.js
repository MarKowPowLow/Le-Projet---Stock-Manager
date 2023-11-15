/****************************fonction bouton*****************************************/



const fonctionBouton = function(objet, fonction1){ 
    //parametre 1 = l'objet correspondant au boutons et parametre 2 = la fonction du click du bouton 
    let boutontype = document.createElement(objet.type);
    boutontype.className = objet.class; 
    boutontype.textContent = objet.text;
    boutontype.addEventListener("click",() =>{
        fonction1();
    })
    return boutontype; // retourne la variable boutontype, variable d'un bouton correspondant a l'objet et la fonction attribué
}
/*********** déclaration des objets de bouton************/



let buttonConfirmer = { // création de boutons sous forme d'objet (premier parametre dans la fonctionBouton)
    type : "div",
    class : "bouton",
    text : "Confirmer",

}
let buttonAnnuler = {
    type : "div",
    class : "bouton",
    text : "Annuler",

}

/***** creation du 2eme parametre attendu dans la fonction bouton, à savoir, une fonction  *****/


let divprincipale = document.createElement("div"); //



let validation = false // variable pour la double verif lors d'une suppression ou d'un ajout (par default a false passe a true pour valider l'action)

const functionboutonConfirmer = function() {
    divprincipale.remove();
    validation = true;
    return validation;

}

const functionboutonAnnuler = function() {
    divprincipale.remove();
    validation = false;
    return validation;
}
/****  création d'une fonction de messageutilisateur pour avoir une double validation des suppression d'éléments*/

const messageUtilisateur = function (fonction2){
    
    divprincipale.textContent = "Etes-vous sûr(e) ?";
    divprincipale.className = "validationAbsolue";
    let divConfirmer = fonctionBouton(buttonConfirmer, functionboutonConfirmer);
    let divAnnuler = fonctionBouton(buttonAnnuler, functionboutonAnnuler);
    document.body.appendChild(divprincipale);
    divprincipale.appendChild(divConfirmer);
    divprincipale.appendChild(divAnnuler);
    if(validation = true){
        fonction2()
    }
    
}



/*******************************BARRE D INPUT******************************************/

/*déclaration des variables et création des div de la barres d'input et du conteneur d'accueil des lignes*/


let divdesinputs = document.createElement("div")
divdesinputs.className = ("divdesinputs")

document.body.appendChild(divdesinputs) // création du conteneur des inputs sur le document

let inputProduit = document.createElement("input")
let inputReference = document.createElement("input")
let inputQuantite = document.createElement("input")
let choixCategorie = document.createElement("div")

/* attribution des classes et des ID aux différents inputs*/ 

choixCategorie.className = "input";
inputProduit.className = "input";
inputReference.className = "input";
inputQuantite.className = "input";

inputProduit.id = "inputProduit";
inputReference.id = "inputReference";
inputQuantite.id = "inputQuantite";
choixCategorie.id = "choixCategorie";

/*typage des input*/

inputQuantite.type = "Number";
inputProduit.type = "Text";
inputReference.type = "Text";
choixCategorie.type ="Select";

inputProduit.defaultValue = "produit"
inputQuantite.defaultValue = "quantité"
inputReference.defaultValue ="reference"
choixCategorie.defaultValue = "catégorie"
let boutonvalider = {
    class : "boutoncréer",
    type : "div",
    text : "",

}
let containerList = document.createElement("div")
containerList.className = "containerList"
document.body.appendChild(containerList)
let supprimerLigne = {
    class : "boutonDelete",
    type : "div",
    text : "",
}



let fonctionCreer = function(){
    let item = {
        name : inputProduit.value,
        reference : inputReference.value,
        quantite : inputQuantite.value,
        categorie : choixCategorie.value,

    }
    let ligneProduit = document.createElement("div")
    ligneProduit.className = "ligneProduit"
    containerList.appendChild(ligneProduit)

    let produit = document.createElement("div")
    produit.className = "element"
    produit.textContent = item.name

    let ref = document.createElement("div")
    ref.className = "element"
    ref.textContent = item.reference

    let qte = document.createElement("div")
    qte.className = "element"
    qte.textContent = item.quantite

    let cat = document.createElement("div")
    cat.className = "element"
    cat.textContent = item.categorie

    ligneProduit.appendChild(produit)
    ligneProduit.appendChild(ref)
    ligneProduit.appendChild(qte)
    ligneProduit.appendChild(cat)
    let fonctiondelete = function(){
        ligneProduit.remove()
    }

    supprimerLigne = fonctionBouton(supprimerLigne, messageUtilisateur(fonctiondelete))
    supprimerLigne.className = "supprimerLigne"
    ligneProduit.appendChild(supprimerLigne)

} 

/* fonction de création des divs sur le bouton valider*/
boutonvalider = fonctionBouton(boutonvalider, messageUtilisateur(fonctionCreer)) 
/* création des éléments input au sein de la divdesinputs sur le document*/
divdesinputs.appendChild(inputProduit)
divdesinputs.appendChild(inputReference)
divdesinputs.appendChild(inputQuantite)
divdesinputs.appendChild(choixCategorie)
divdesinputs.appendChild(boutonvalider)


export{fonctionCreer, messageUtilisateur}