import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDocs, query, where } from 'firebase/firestore';
import firebaseConfig from '../../keys.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fixed user IDs
export const USER_IDS = {
  DANICA: 'danica_user',
  CHRISTY: 'christy_user',
  CATHRYN: 'cathryn_user'
};

// Function to create or get the user accounts
export const setupUsers = async () => {
  try {
    const usersRef = collection(db, 'users');
    
    // Setup Danica
    const danicaDoc = doc(usersRef, USER_IDS.DANICA);
    await setDoc(danicaDoc, {
      username: 'Danica',
      id: USER_IDS.DANICA,
      surveyAccess: []
    });
    console.log('Created/Updated Danica user');

    // Setup Christy
    const christyDoc = doc(usersRef, USER_IDS.CHRISTY);
    await setDoc(christyDoc, {
      username: 'Christy',
      id: USER_IDS.CHRISTY,
      surveyAccess: []
    });
    console.log('Created/Updated Christy user');

    // Setup Cathryn
    const cathrynDoc = doc(usersRef, USER_IDS.CATHRYN);
    await setDoc(cathrynDoc, {
      username: 'Cathryn',
      id: USER_IDS.CATHRYN,
      surveyAccess: []
    });
    console.log('Created/Updated Cathryn user');

    return {
      danica: USER_IDS.DANICA,
      christy: USER_IDS.CHRISTY,
      cathryn: USER_IDS.CATHRYN
    };
  } catch (error) {
    console.error('Error in user setup:', error);
    throw error;
  }
};

// Execute the setup
setupUsers()
  .then(() => console.log('User setup completed'))
  .catch((error) => console.error('User setup failed:', error)); 