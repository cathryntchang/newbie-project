import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc, arrayUnion, query, where } from 'firebase/firestore';
import firebaseConfig from '../../keys.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Collection references
const companiesRef = collection(db, 'companies');
const usersRef = collection(db, 'users');

// Company functions
export const createCompany = async (companyData: {
  companyName: string;
  id?: string;
}) => {
  const companyRef = doc(companiesRef);
  await setDoc(companyRef, {
    ...companyData,
    id: companyRef.id,
    surveys: []
  });
  return companyRef.id;
};

// Survey functions
export const createSurvey = async (companyId: string, surveyData: {
  title: string;
  questions: string[];
  peopleInvited: string[];
}) => {
  try {
    // Get reference to the company's surveys collection
    const companyRef = doc(companiesRef, companyId);
    const surveysRef = collection(companyRef, 'surveys');
    const surveyRef = doc(surveysRef);
    const surveyId = surveyRef.id;

    // Create the main survey document
    await setDoc(surveyRef, {
      id: surveyId,
      title: surveyData.title,
      createdAt: new Date().toISOString()
    });

    // Create questions collection and add each question as a document
    const questionsRef = collection(surveyRef, 'questions');
    const questionPromises = surveyData.questions.map((question, index) => {
      const questionDoc = doc(questionsRef);
      return setDoc(questionDoc, {
        id: questionDoc.id,
        questionText: question,
        order: index + 1
      });
    });
    await Promise.all(questionPromises);

    // Create invites document to store invited people
    const invitesRef = doc(surveyRef, 'invites');
    await setDoc(invitesRef, {
      people: surveyData.peopleInvited
    });

    // Create answers collection (initially empty)
    const answersRef = doc(surveyRef, 'answers');
    await setDoc(answersRef, {
      responses: {}  // Will store responses by username
    });

    // Add survey ID to company's surveys array
    await updateDoc(companyRef, {
      surveys: arrayUnion(surveyId)
    });

    return surveyId;
  } catch (error) {
    console.error('Error creating survey:', error);
    throw error;
  }
};

// Function to add a response to a survey
export const addSurveyResponse = async (
  companyId: string,
  surveyId: string,
  responseData: {
    username: string;
    responses: { [questionId: string]: string }
  }
) => {
  try {
    const surveyRef = doc(companiesRef, companyId, 'surveys', surveyId);
    const answersRef = doc(surveyRef, 'answers');

    // Get current answers document
    const answersDoc = await getDoc(answersRef);
    const currentResponses = answersDoc.exists() ? answersDoc.data().responses : {};

    // Add or update the user's responses
    await updateDoc(answersRef, {
      responses: {
        ...currentResponses,
        [responseData.username]: responseData.responses
      }
    });
  } catch (error) {
    console.error('Error adding survey response:', error);
    throw error;
  }
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

// Add this function to check if company exists
export const getCompanyById = async (companyId: string) => {
  try {
    const companyRef = doc(db, 'companies', companyId);
    const companyDoc = await getDoc(companyRef);
    if (!companyDoc.exists()) {
      throw new Error('Company not found');
    }
    return companyDoc.data();
  } catch (error) {
    console.error('Error getting company:', error);
    throw error;
  }
};

export const createNewSurvey = async (
  companyId: string,
  title: string,
  invitedUsers: string[],
  questions: { questionText: string, order: number }[]
) => {
  try {
    // First check if company exists
    const company = await getCompanyById(companyId);
    if (!company) {
      throw new Error('Company not found');
    }

    // Create a new survey document
    const surveyDoc = doc(collection(db, `companies/${companyId}/surveys`));
    const surveyId = surveyDoc.id;

    // Set the main survey data
    await setDoc(surveyDoc, {
      id: surveyId,
      title,
      invitedUsers,
      createdAt: new Date().toISOString()
    });

    // Add questions as separate documents
    for (const question of questions) {
      const questionDoc = doc(collection(db, `companies/${companyId}/surveys/${surveyId}/questions`));
      await setDoc(questionDoc, {
        id: questionDoc.id,
        ...question
      });
    }

    // Create metadata documents
    await setDoc(
      doc(db, `companies/${companyId}/surveys/${surveyId}/metadata`, 'invites'),
      {
        people: invitedUsers
      }
    );

    await setDoc(
      doc(db, `companies/${companyId}/surveys/${surveyId}/metadata`, 'answers'),
      {
        responses: {}
      }
    );

    // Update company's surveys array - make sure to initialize if it doesn't exist
    const companyRef = doc(db, 'companies', companyId);
    await updateDoc(companyRef, {
      surveys: arrayUnion(surveyId)
    });

    return surveyId;
  } catch (error) {
    console.error('Error creating survey:', error);
    throw error;
  }
};

// Export db instance for direct use if needed
export { db }; 