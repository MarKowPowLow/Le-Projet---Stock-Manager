// Creer un objet en prenant les valeurs des champs de text
const creerCollection = (tableauObjectDeChamp) => {
  let objet = {};
  //console.log(objet);
  for (let obj of tableauObjectDeChamp) {
    if(document.getElementById(obj.nom)) {
      objet[obj.nom] = document.getElementById(obj.nom).value;
      //console.log(obj.nom);
    }
  }
  
  return objet;
};

export {
  creerCollection,
}