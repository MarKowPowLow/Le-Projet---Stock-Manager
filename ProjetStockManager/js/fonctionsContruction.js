//constructeur container principal

const constructeurContainerPrincipal = (text) => {
  const containerPrincipal = document.createElement("div");
  containerPrincipal.textContent = text;

  return containerPrincipal;
};

export { constructeurContainerPrincipal };
