import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc, arrayUnion, query, where } from 'firebase/firestore';
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

// User functions
export const createUser = async (userData: {
  username: string;
  surveyAccess: string[];
}) => {
  const userRef = doc(usersRef);
  await setDoc(userRef, {
    ...userData,
    id: userRef.id
  });
  return userRef.id;
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