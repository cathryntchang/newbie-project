const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, setDoc, query, where, getDocs, deleteDoc } = require('firebase/firestore');
const firebaseConfig = require('../../keys.json');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to create the company account
const setupCompany = async () => {
  try {
    // First, check for existing Daymi companies
    const companiesRef = collection(db, 'companies');
    const q = query(companiesRef, where("name", "==", "Daymi"));
    const querySnapshot = await getDocs(q);
    
    // Delete any existing Daymi companies
    const deletePromises = [];
    querySnapshot.forEach((doc) => {
      console.log('Deleting existing Daymi company with ID:', doc.id);
      deletePromises.push(deleteDoc(doc.ref));
    });
    await Promise.all(deletePromises);
    
    // Create a new document in the companies collection
    const companyDoc = doc(companiesRef);
    
    // Set the company data (without surveys array)
    await setDoc(companyDoc, {
      name: 'Daymi',
      id: companyDoc.id
    });

    // Create the surveys collection and add a test document to ensure it exists
    const surveysCollectionRef = collection(companyDoc, 'surveys');
    const testSurveyDoc = doc(surveysCollectionRef);
    await setDoc(testSurveyDoc, {
      id: testSurveyDoc.id,
      title: 'Test Survey',
      createdAt: new Date().toISOString()
    });

    console.log('Created surveys collection with test document');
    console.log('Company created successfully with ID:', companyDoc.id);
    return companyDoc.id;
  } catch (error) {
    console.error('Error creating company:', error);
    throw error;
  }
};

module.exports = { setupCompany }; 