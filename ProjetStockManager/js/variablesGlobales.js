import { obtenirTouteLaCollection } from "./fonctionsCRUDFirebase.js";

let tableauObjectDeChamp = [
    {nom:"Nom", type:"text"},
    {nom:"Référence", type:"text"},
    {nom:"Quantité", type:"number", step:"1"},
    {nom:"Catégorie", type:"text"},
    {nom:"Prix", type:"number", step:"0.01", check:false},
    {nom:"Date", type:"date", check:false},
    {nom:"SousCatégorie", type:"text", check:false},
    {nom:"Unité", type:"text", check:false}
];
//console.log(tableauObjectDeChamp);

let choixCat = await obtenirTouteLaCollection("Catégorie");
let choixInput = Object.values(choixCat[0]);
console.log(choixCat[0]);
console.log(choixInput);

export {tableauObjectDeChamp ,choixInput}