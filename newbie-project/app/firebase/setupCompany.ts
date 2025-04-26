import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import firebaseConfig from '../../keys.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to create the company account
export const setupCompany = async () => {
  try {
    // Create a new document in the companies collection
    const companiesRef = collection(db, 'companies');
    const companyDoc = doc(companiesRef);
    
    // Set the company data
    await setDoc(companyDoc, {
      name: 'Daymi',
      surveys: [], // Empty array for surveys that will be added later
      id: companyDoc.id // Store the document ID as a field
    });

    console.log('Company created successfully with ID:', companyDoc.id);
    return companyDoc.id;
  } catch (error) {
    console.error('Error creating company:', error);
    throw error;
  }
};

// Execute the setup
setupCompany()
  .then(() => console.log('Setup completed'))
  .catch((error) => console.error('Setup failed:', error)); 