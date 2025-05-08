// src/hooks/useFileUpload.ts
import { useState, ChangeEvent } from 'react';
import { FileUploadOptions, FileUploadState } from '../utils/types';

export const useFileUpload = ({ maxSizeMB = 10, onFileChange }: FileUploadOptions) => {
  const [uploadState, setUploadState] = useState<FileUploadState>({
    file: null,
    fileName: null,
    error: null
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    
    if (!file) {
      setUploadState({
        file: null,
        fileName: null,
        error: null
      });
      onFileChange(null);
      return;
    }

    // Check file size
    const fileSizeInMB = file.size / (1024 * 1024);
    if (fileSizeInMB > maxSizeMB) {
      setUploadState({
        file: null,
        fileName: null,
        error: `File size exceeds ${maxSizeMB}MB limit`
      });
      onFileChange(null);
      return;
    }

    // Valid file
    setUploadState({
      file,
      fileName: file.name,
      error: null
    });
    onFileChange(file);
  };

  const removeFile = () => {
    setUploadState({
      file: null,
      fileName: null,
      error: null
    });
    onFileChange(null);
  };

  return {
    uploadState,
    handleFileChange,
    removeFile
  };
};