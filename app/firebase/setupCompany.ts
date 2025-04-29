import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDocs, query, where } from 'firebase/firestore';
import firebaseConfig from '../../keys.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to create or get the company account
export const setupCompany = async () => {
  try {
    const companiesRef = collection(db, 'companies');
    
    // Check if Daymi already exists
    const q = query(companiesRef, where('name', '==', 'Daymi'));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      // Company exists, return the first matching document ID
      const existingCompany = querySnapshot.docs[0];
      console.log('Found existing Daymi company with ID:', existingCompany.id);
      return existingCompany.id;
    }
    
    // If company doesn't exist, create it with a consistent ID
    const companyDoc = doc(companiesRef, 'daymi_company'); // Using a consistent ID
    
    // Set the company data
    await setDoc(companyDoc, {
      name: 'Daymi',
      surveys: [], // Empty array for surveys that will be added later
      id: companyDoc.id
    });

    console.log('Created new Daymi company with ID:', companyDoc.id);
    return companyDoc.id;
  } catch (error) {
    console.error('Error in company setup:', error);
    throw error;
  }
};

// Execute the setup
setupCompany()
  .then(() => console.log('Setup completed'))
  .catch((error) => console.error('Setup failed:', error)); 