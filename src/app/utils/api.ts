// src/utils/api.ts
import { ApiResponse } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

/**
 * Generic function to handle API errors
 */
const handleApiError = (error: any): never => {
  console.error('API Error:', error);
  throw error;
};

/**
 * Submits startup data to the API
 * 
 * @param formData The form data to submit including any files
 * @returns Promise with the API response
 */
export const submitStartupData = async (formData: FormData): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/form`, {
      method: 'POST',
      body: formData,
      // Note: Don't set Content-Type header when sending FormData,
      // the browser will set it automatically with the correct boundary
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    return handleApiError(error);
  }
};

/**
 * Get validation status for a submission
 * 
 * @param submissionId The ID of the submission to check
 * @returns Promise with the API response
 */
export const getSubmissionStatus = async (submissionId: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/submit/${submissionId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    return handleApiError(error);
  }
};