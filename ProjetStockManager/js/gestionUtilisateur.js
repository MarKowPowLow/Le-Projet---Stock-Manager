// Création conteneur Top Bar
let topBar = document.createElement("div");
topBar.classList.add("topbar");
document.body.appendChild(topBar);


// Création boutons et zone recherche
let accueil = document.createElement("div");
accueil.textContent = "Accueil";
accueil.classList.add("topbutton")
topBar.appendChild(accueil);

    // Création écouteur événement pour changer de page

    accueil.addEventListener("click", () => {
        document.location.href='index.html';
    })


let gererCategories = document.createElement("div");
gererCategories.textContent = "Gérer les catégories";
gererCategories.classList.add("topbutton");
topBar.appendChild(gererCategories);


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





// Création Div Inputs

let divInput = document.createElement("div");
divInput.classList.add("divinput");
document.body.appendChild(divInput);

    
    let inputNom = document.createElement("input");
    inputNom.setAttribute("type", "text");
    inputNom.setAttribute("placeholder","Nom");
    divInput.appendChild(inputNom);

    let inputPrenom = document.createElement("input");
    inputPrenom.setAttribute("type", "text");
    inputPrenom.setAttribute("placeholder", "Prénom");
    divInput.appendChild(inputPrenom);

    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("placeholder", "Email");
    divInput.appendChild(inputEmail);

    let validButton = document.createElement("img");
    validButton.src = "./img/Cercle-valider.svg";
    validButton.className = "imagevalider";
    divInput.appendChild(validButton);

// Création conteneur liste
let conteneurList = document.createElement("div");
conteneurList.classList.add("conteneurliste")
document.body.appendChild(conteneurList);

// Création écouteur événement bouton valider
    validButton.addEventListener("click", () => {

        if((inputPrenom.value == "") || (inputNom.value =="") || (inputEmail.value =="")) {
            alert("Veuillez remplir les champs demandés")
        } else {
        let listeobjet = document.createElement("div");
        listeobjet.classList.add("listeobjet");
        conteneurList.appendChild(listeobjet);
        
        // Création des divs contenant la valeur des inputs
        
        let objetNom = document.createElement("div");
        objetNom.textContent = inputNom.value;
        listeobjet.appendChild(objetNom);
        
        let objetPrenom = document.createElement("div");
        objetPrenom.textContent = inputPrenom.value;
        listeobjet.appendChild(objetPrenom);
        
        let objetEmail = document.createElement("div");
        objetEmail.textContent = inputEmail.value;
        listeobjet.appendChild(objetEmail);
        
        let deleteButtonConteneurListe = document.createElement("img");
        deleteButtonConteneurListe.src ="./img/circle-xmark-regular.svg";
        deleteButtonConteneurListe.className = "imagesupprimer";
        listeobjet.appendChild(deleteButtonConteneurListe);

        deleteButtonConteneurListe.addEventListener("click", () => {
            deleteButtonConteneurListe.parentNode.remove()
        })
    }
    })

    



