
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
  // This is a placeholder URL - user needs to replace with their actual Google Apps Script Web App URL
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
  
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
