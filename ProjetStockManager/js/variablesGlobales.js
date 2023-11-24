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

let choixInput = ["Fruits", "Légumes", "Fromages", "Yaourts"];

export {tableauObjectDeChamp, choixInput}