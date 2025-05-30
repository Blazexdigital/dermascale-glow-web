
export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  practiceType: string;
  practiceName: string;
  goals: string;
}

export const submitToGoogleSheets = async (formData: FormData) => {
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzFTja-s5bV38Fv4v6EBGoP87iENvDkmkXgTLJYvAM_C8gYgFti5MC4dYV5EIBq6G6Z/exec';
  
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'Dermascale Website'
      }),
    });

    // Since we're using no-cors, we can't check the response status
    // We'll assume success if no error is thrown
    return { success: true };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    throw new Error('Failed to submit form');
  }
};
