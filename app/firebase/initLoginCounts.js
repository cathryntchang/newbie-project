import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import firebaseConfig from '../../keys.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// User document IDs
const USER_IDS = {
  CATHRYN: '254LZeoQ1x1TBAgpLWKk',
  DANICA: 'RDjB9obUCas4Nwuez12K',
  CHRISTY: 'TwFjhnxVXfDOko15058B'
};

// Function to initialize login counts
const initLoginCounts = async () => {
  try {
    // Initialize Cathryn's login count
    await setDoc(doc(db, 'users', USER_IDS.CATHRYN), {
      loginCount: 0
    }, { merge: true });
    console.log('Initialized Cathryn login count');

    // Initialize Danica's login count
    await setDoc(doc(db, 'users', USER_IDS.DANICA), {
      loginCount: 0
    }, { merge: true });
    console.log('Initialized Danica login count');

    // Initialize Christy's login count
    await setDoc(doc(db, 'users', USER_IDS.CHRISTY), {
      loginCount: 0
    }, { merge: true });
    console.log('Initialized Christy login count');

    console.log('All login counts initialized successfully');
  } catch (error) {
    console.error('Error initializing login counts:', error);
    throw error;
  }
};

// Run the initialization
initLoginCounts()
  .then(() => console.log('Login count initialization completed'))
  .catch((error) => console.error('Login count initialization failed:', error)); 