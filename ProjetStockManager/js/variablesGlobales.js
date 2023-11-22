let tableauObjectDeChamp = [
    {nom:"Nom", type: "text"},
    {nom:"Référence", type: "text"},
    {nom:"Quantité", type: "number", step:"1"},
    {nom:"Catégorie", type: "text", check: false},
    {nom:"Prix", type: "number", step:"0.01", check:false},
    {nom:"Date", type: "date", check:false},
    {nom:"SousCatégorie", type: "text", check:false},
    {nom:"Unité", type: "text", check:false}
]

let choixInput = ["Fruits", "Légumes", "Fromages", "Yaourts"];


export {tableauObjectDeChamp ,choixInput}