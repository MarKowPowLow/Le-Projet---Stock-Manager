        // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc,deleteDoc,query,where,setDoc} 
from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js'
    
   
      
        const firebaseConfig = {
          apiKey: "AIzaSyA-yDBRtQz41FEHxA80mEFz-Nd_ZuhJLpk",
          authDomain: "viaformation-b4604.firebaseapp.com",
          projectId: "viaformation-b4604",
          storageBucket: "viaformation-b4604.appspot.com",
          messagingSenderId: "487880074228",
          appId: "1:487880074228:web:e68f96d71048f94a144fa1"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app)
          
 

const ajouterUnObjet = async(obj,dataBase) => {


        try {
            const docRef = await addDoc(collection(db, dataBase), obj)
           
            console.log(`Le document a bien été ajouté la base de donnée : ${dataBase}` , docRef.id);
            obj.id = docRef.id;
            return obj
         
          } catch (e) {
            console.error("Error adding document: ", e);
          }

    

}

const ajouterUnObjetAvecIdSpécifique = async (obj, dataBase, customId) => {
  try {
    // Specify a custom document ID using `doc()` method
    const docRef = doc(collection(db, dataBase), customId);

    // Set the data for the document
    await setDoc(docRef, obj);

    console.log(`Le document a bien été ajouté à la base de données : ${dataBase} avec l'ID : ${customId}`);
    obj.id = customId;
    return obj;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const ajouterUnObjetNommé = async(obj,dataBase) => {


  try {
      const docRef = await addDoc(collection(db, dataBase), obj)
     
      console.log(`Le document a bien été ajouté la base de donnée : ${dataBase}` , docRef.id);
      obj.id = docRef.id;
      return obj
   
    } catch (e) {
      console.error("Error adding document: ", e);
    }



}
//!!!!!   PROMESSE !!!  obtenir la collection :  let maCollection = await obtenirTouteLaCollection("base-de-donnée")
const obtenirTouteLaCollection = async(dataBase) => {
try {

  const _collection = collection(db, dataBase);
  const querySnapshot = await getDocs(_collection);


    const tableau = await querySnapshot.docs.map((doc) => {
      const data = doc.data();
      data.id = doc.id
return data
    })
return tableau
   
  } catch (error) {
   
    console.error("An error occurred:", error);

  }


}

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

const supprimerTousLesDocumentsDeLaCollection = async ( collectionName) => {
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

const trouverDocumentsAvecValeur = async ( collectionName, fieldName, targetValue) => {
  const collectionRef = collection(db, collectionName);

  try {
    const querySnapshot = await getDocs(query(collectionRef, where(fieldName, '==', targetValue)));

    querySnapshot.forEach((doc) => {
      console.log('Document ID: ', doc.id);
      console.log('Document data: ', doc.data());
    });
  } catch (error) {
    console.log("Une erreur s'est produite : ", error);
  }
};

const telDocumentExiste = async (collectionName, fieldName, targetValue) => {
  const collectionRef = collection(db, collectionName);
  let documentExists = false;

  try {
    const querySnapshot = await getDocs(query(collectionRef, where(fieldName, '==', targetValue)));

    querySnapshot.forEach((doc) => {
 
      documentExists = true;
    });

    return documentExists;
  } catch (error) {
    console.log("Une erreur s'est produite : ", error);
    return false; // Handle any errors and return false
  }
};

const mettreAJourDocumentsAvecValeurParticulière = async (collectionName, updateObject, propriété, valeur) => {
  const collectionRef = collection(db, collectionName);

  try {
    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach(async (document) => {
      const data = document.data();
      if (data && data[propriété] === valeur) {
        const docRef = doc(db, `${collectionName}/${document.id}`); // Corrected line
        await updateDoc(docRef, updateObject);
        console.log('Document ID:', document.id, 'has been updated with', updateObject);
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
    
    console.log(`Collection '${collectionPath}' and all its documents have been deleted.`);
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
  deleteCollection
}