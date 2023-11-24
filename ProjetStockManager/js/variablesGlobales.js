import{obtenirTouteLaCollection, supprimerUnField} from "./fonctionsCRUDFirebase.js";

let tableauObjectDeChamp = [
    {nom:"Nom", type:"text", check:true},
    {nom:"Référence", type:"text"},
    {nom:"Quantité", type:"number", step:"1"},
    {nom:"Catégorie", type:"text", check:true},
    {nom:"Prix", type:"number", step:"0.01", check:false},
    {nom:"Date", type:"date", check:false},
    {nom:"SousCatégorie", type:"text", check:false},
    {nom:"Unité", type:"text", check:false}
];
//console.log(Object.values(tableauObjectDeChamp[5]));

let choixCat = await obtenirTouteLaCollection("Catégorie");
let choixInput = Object.values(choixCat[0]);
choixInput.pop();

console.log(choixCat[0].id);
console.log(choixInput);

supprimerUnField("Catégorie", "cat", "supprime");
//let choixInput = ["Fruits", "Légumes", "Fromages", "Yaourts"];


export {tableauObjectDeChamp, choixInput}