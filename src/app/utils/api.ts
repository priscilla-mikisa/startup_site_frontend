// // src/utils/api.ts
// import { ApiResponse } from './types';

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// /**
//  * Generic function to handle API errors
//  */
// const handleApiError = (error): never => {
//   console.error('API Error:', error);
//   throw error;
// };

// /**
//  * Submits startup data to the API
//  * 
//  * @param formData The form data to submit including any files
//  * @returns Promise with the API response
//  */
// export const submitStartupData = async (formData: FormData): Promise<ApiResponse> => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/form`, {
//       method: 'POST',
//       body: formData,
//       // Note: Don't set Content-Type header when sending FormData,
//       // the browser will set it automatically with the correct boundary
//     });

//     if (!response.ok) {
//       throw new Error(`Server responded with status: ${response.status}`);
//     }

//     const data: ApiResponse = await response.json();
//     return data;
//   } catch (error) {
//     return handleApiError(error);
//   }
// };

// /**
//  * Get validation status for a submission
//  * 
//  * @param submissionId The ID of the submission to check
//  * @returns Promise with the API response
//  */
// export const getSubmissionStatus = async (submissionId: string): Promise<ApiResponse> => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/submit/${submissionId}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Server responded with status: ${response.status}`);
//     }

//     const data: ApiResponse = await response.json();
//     return data;
//   } catch (error) {
//     return handleApiError(error);
//   }
// };



// src/app/utils/api.ts

/**
 * API functions for the startup founders application
 */

// Login function
export async function loginUser(username: string, password: string) {
  try {
    const response = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Login failed');
    }
    
    return data;
  } catch (error) {
    throw error;
  }
}

// Type definition for startup submission data
export interface StartupSubmissionData {
  founder_name: string;
  startup_name: string;
  email: string;
  description: string;
  pitch_deck: File | null;
}

/**
 * Submit startup application to the backend
 * @param formData FormData object containing all form fields and files
 * @returns Response from the server
 */
export async function submitStartupData(formData: FormData) {
  try {
    // Map form fields to match the backend API requirements
    const apiFormData = new FormData();
    
    // Map the fields from our form to the backend API field names
    const fieldMapping: Record<string, string> = {
      'founderName': 'founder_name',
      'companyName': 'startup_name',
      'email': 'email',
      'description': 'description',
      'pitchDeck': 'pitch_deck'
    };
    
    // Process each field from the original FormData
    for (const [key, value] of formData.entries()) {
      // If it's a field we need to map, use the mapped name
      if (key in fieldMapping) {
        apiFormData.append(fieldMapping[key], value);
      } else if (key !== 'pitchDeck') {
        // For other fields not in our mapping (except pitchDeck which is handled specially),
        // add them as-is for optional data
        apiFormData.append(key, value);
      }
    }
    
    // Make the API call to submit the startup application
    const response = await fetch('https://startupsite-production.up.railway.app/api/submit/', {
      method: 'POST',
      body: apiFormData,
      // Don't set Content-Type header when using FormData - the browser will set it automatically
    });
    
    const responseData = await response.json();
    
    if (!response.ok) {
      // If there are validation errors, format them nicely
      if (response.status === 400) {
        const errorMessages = Object.entries(responseData)
          .map(([field, errors]) => `${field}: ${Array.isArray(errors) ? errors.join(', ') : errors}`)
          .join('; ');
        throw new Error(`Validation errors: ${errorMessages}`);
      }
      throw new Error(responseData.error || 'Failed to submit startup application');
    }
    
    return responseData;
  } catch (error) {
    throw error;
  }
}

// Also export the function with the alternative name for backward compatibility
export const submitStartupApplication = submitStartupData;