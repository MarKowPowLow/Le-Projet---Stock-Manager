// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// Import du variable testé tableauDeChamp. Peut être supprimé.
//import { tableauDeChamps } from "./scriptPrincipal.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxo2xLjQ9V9py0G51PhVKgxA-ObEZwTBo",
  authDomain: "projet-stock-manager.firebaseapp.com",
  projectId: "projet-stock-manager",
  storageBucket: "projet-stock-manager.appspot.com",
  messagingSenderId: "547961245484",
  appId: "1:547961245484:web:cca9ea7c7ff717404da689",
  measurementId: "G-BYL4R3KS1T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const createUser = async (email, password) => {
  try {
    // Signed up
    const user = await createUserWithEmailAndPassword(auth, email, password);

    return user;
  } catch (e) {
    const errorCode = e.code;
    const errorMessage = e.message;
  }
};

// Function pour le bouton "croix-valider" qui déclenche les fonctions basé sur les inputs.
let ajouterCollection = document.getElementById("cercle_valider");
ajouterCollection.addEventListener("click", () => {
  let obj = creerCollection(tableauDeChamps);
  let dataBase = document.getElementById("Catégorie").value;

  ajouterUnObjet(obj, dataBase);
  viderChampText(tableauDeChamps);
  console.log(obj);
});

// Créer un objet en prenant les valeurs des champs de text
const creerCollection = (tableauDeChamps) => {
  let tabOjet = [];
  let objet = {};
  for (let obj of tableauDeChamps) {
    objet[obj.id] = document.getElementById(obj.id).value;

    tabOjet.push(objet);
  }
  console.log(tabOjet);
  console.log(objet);
  return objet;
};

// Vide les champs de text
const viderChampText = (tableauDeChamps) => {
  for (let obj of tableauDeChamps) {
    let _input = document.createElement("input");
    _input.value = "";
    if (obj.type === "number") {
      _input.value = 0;
    }
  }
};

const ajouterUnObjet = async (obj, dataBase) => {
  try {
    const docRef = await addDoc(collection(db, dataBase), obj);

    console.log(
      `Le document a bien été ajouté la base de donnée : ${dataBase}`,
      docRef.id
    );
    obj.id = docRef.id;
    return obj;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const ajouterUnObjetAvecIdSpécifique = async (obj, dataBase, customId) => {
  try {
    // Specify a custom document ID using `doc()` method
    const docRef = doc(collection(db, dataBase), customId);

    // Set the data for the document
    await setDoc(docRef, obj);

    console.log(
      `Le document a bien été ajouté à la base de données : ${dataBase} avec l'ID : ${customId}`
    );
    obj.id = customId;
    return obj;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const ajouterUnObjetNommé = async (obj, dataBase) => {
  try {
    const docRef = await addDoc(collection(db, dataBase), obj);

    console.log(
      `Le document a bien été ajouté la base de donnée : ${dataBase}`,
      docRef.id
    );
    obj.id = docRef.id;
    return obj;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

//!!!!!   PROMESSE !!!  obtenir la collection :  let maCollection = await obtenirTouteLaCollection("base-de-donnée")
const obtenirTouteLaCollection = async (dataBase) => {
  try {
    const _collection = collection(db, dataBase);
    const querySnapshot = await getDocs(_collection);

    const tableau = await querySnapshot.docs.map((doc) => {
      const data = doc.data();
      data.id = doc.id;
      return data;
    });
    return tableau;
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const mettreAJourUnDocument = async (dataBase, id, obj) => {
  const docRef = doc(db, dataBase, id);

  try {
    await updateDoc(docRef, obj);
    console.log("Le document a bien été modifié");
  } catch (error) {
    console.log(error);
  }
};

const supprimerUnDocument = async (dataBase, id) => {
  const docRef = doc(db, dataBase, id);

  try {
    await deleteDoc(docRef);
    console.log("Le document a bien été supprimé");
  } catch (error) {
    console.log(error);
  }
};

const supprimerTousLesDocumentsDeLaCollection = async (collectionName) => {
  const collectionRef = collection(db, collectionName);

  try {
    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });

    console.log("Tous les documents de la collection ont été supprimés.");
  } catch (error) {
    console.log("Une erreur s'est produite : ", error);
  }
};

const trouverDocumentsAvecValeur = async (
  collectionName,
  fieldName,
  targetValue
) => {
  const collectionRef = collection(db, collectionName);

  try {
    const querySnapshot = await getDocs(
      query(collectionRef, where(fieldName, "==", targetValue))
    );

    querySnapshot.forEach((doc) => {
      console.log("Document ID: ", doc.id);
      console.log("Document data: ", doc.data());
    });
  } catch (error) {
    console.log("Une erreur s'est produite : ", error);
  }
};

const telDocumentExiste = async (collectionName, fieldName, targetValue) => {
  const collectionRef = collection(db, collectionName);
  let documentExists = false;

  try {
    const querySnapshot = await getDocs(
      query(collectionRef, where(fieldName, "==", targetValue))
    );

    querySnapshot.forEach((doc) => {
      documentExists = true;
    });

    return documentExists;
  } catch (error) {
    console.log("Une erreur s'est produite : ", error);
    return false; // Handle any errors and return false
  }
};

const mettreAJourDocumentsAvecValeurParticulière = async (
  collectionName,
  updateObject,
  propriété,
  valeur
) => {
  const collectionRef = collection(db, collectionName);

  try {
    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach(async (document) => {
      const data = document.data();
      if (data && data[propriété] === valeur) {
        const docRef = doc(db, `${collectionName}/${document.id}`); // Corrected line
        await updateDoc(docRef, updateObject);
        console.log(
          "Document ID:",
          document.id,
          "has been updated with",
          updateObject
        );
      }
    });
  } catch (error) {
    console.log("Une erreur s'est produite : ", error);
  }
};

const deleteCollection = async (collectionPath) => {
  const q = query(collection(db, collectionPath));

  try {
    const querySnapshot = await getDocs(q);

    // Delete all documents in the collection
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });

    // Delete the collection itself
    await deleteCollection(collection(db, collectionPath));

    console.log(
      `Collection '${collectionPath}' and all its documents have been deleted.`
    );
  } catch (error) {
    console.error("Error deleting collection: ", error);
  }
};

export {
  ajouterUnObjet,
  ajouterUnObjetAvecIdSpécifique,
  obtenirTouteLaCollection,
  trouverDocumentsAvecValeur,
  mettreAJourUnDocument,
  supprimerUnDocument,
  supprimerTousLesDocumentsDeLaCollection,
  mettreAJourDocumentsAvecValeurParticulière,
  telDocumentExiste,
  deleteCollection,
  createUser,
  ajouterCollection,
};
