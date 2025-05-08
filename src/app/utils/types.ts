// src/utils/types.ts

export interface FounderFormData {
    founderName: string;
    email: string;
    companyName: string;
    website: string;
    industry: string;
    stage: string;
    description: string;
    funding: string;
    comments: string;
  }
  
  export interface FileUploadState {
    file: File | null;
    fileName: string | null;
    error: string | null;
  }
  
  export interface FileUploadOptions {
    maxSizeMB?: number;
    onFileChange: (file: File | null) => void;
  }
  
  export interface ApiResponse {
    success: boolean;
    message: string;
    data?: any;
  }