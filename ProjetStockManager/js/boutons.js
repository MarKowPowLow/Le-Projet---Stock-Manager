const fonctionBouton = function (objet, fonction2) {
  let boutontype = document.createElement(objet.type);
  boutontype.className = objet.class;
  boutontype.textContent = objet.text;
  boutontype.addEventListener("click", () => {
    fonction2();
  });
  return boutontype;
};
export { fonctionBouton };
