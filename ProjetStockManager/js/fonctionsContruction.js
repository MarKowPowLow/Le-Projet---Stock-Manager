import { tableauObjectDeChamp } from "./test.js"
//constructeur container principal

const constructeurContainerPrincipal = (text) => {

    const containerPrincipal = document.createElement("div");
    containerPrincipal.textContent = text;



    return containerPrincipal;


}
//######   construction de la ligne enfants contenant les information saisi.#############

function objetConstructeur() {
    let obj = {}
    let conteneurliste = document.getElementById("conteneurliste")
    

    for (let ob in tableauObjectDeChamp) {
        let temp = document.getElementById(tableauObjectDeChamp[ob].nom)
        if (temp !== null) {
            obj[temp.id] = temp.value
            temp.value=""
        }
    }
    //console.log(obj)
    let parentLigne = document.createElement("div")
    parentLigne.classList.add("listeobjet")
    conteneurliste.appendChild(parentLigne)
    for (let temp in obj){
        
        let enfantLigne = document.createElement("div")
        enfantLigne.textContent=obj[temp]
        parentLigne.appendChild(enfantLigne)
        //console.log(obj[temp])

    }
}






export { constructeurContainerPrincipal, objetConstructeur }

