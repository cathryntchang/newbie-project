import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc, arrayUnion, query, where, increment } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import firebaseConfig from '../../keys.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Collection references
const companiesRef = collection(db, 'companies');
const usersRef = collection(db, 'users');

// Fixed company ID for Daymi
export const DAYMI_COMPANY_ID = 'daymi_company';

// Fixed user IDs - using existing document IDs
export const USER_IDS = {
  CATHRYN: '254LZeoQ1x1TBAgpLWKk',
  DANICA: 'RDjB9obUCas4Nwuez12K',
  CHRISTY: 'TwFjhnxVXfDOko15058B'
};

// Initialize login counts for users
const initLoginCounts = async () => {
  try {
    // Initialize login counts for all users
    await Promise.all([
      setDoc(doc(usersRef, USER_IDS.CATHRYN), { loginCount: 0 }, { merge: true }),
      setDoc(doc(usersRef, USER_IDS.DANICA), { loginCount: 0 }, { merge: true }),
      setDoc(doc(usersRef, USER_IDS.CHRISTY), { loginCount: 0 }, { merge: true })
    ]);
    console.log('Login counts initialized');
  } catch (error) {
    console.error('Error initializing login counts:', error);
  }
};

// Run initialization
initLoginCounts();

// Survey functions
export const createSurvey = async (companyId: string, surveyData: {
  questions: string[];
  image?: string;
  peopleInvited: string[];
}) => {
  const companyRef = doc(companiesRef, companyId);
  const surveysRef = collection(companyRef, 'surveys');
  const surveyRef = doc(surveysRef);
  
  await setDoc(surveyRef, {
    ...surveyData,
    id: surveyRef.id,
    gptSummary: '',
    answers: []
  });
  
  return surveyRef.id;
};

export const addSurveyAnswer = async (
  companyId: string,
  surveyId: string,
  answerData: {
    name: string;
    answers: { [key: string]: string };
  }
) => {
  const surveyRef = doc(companiesRef, companyId, 'surveys', surveyId);
  await updateDoc(surveyRef, {
    answers: arrayUnion(answerData)
  });
};

// Export db instance for direct use if needed
export { db, auth }; 