import { useFileUpload } from '@/app/hooks/useFileUpload';
import React, { useState, ChangeEvent } from 'react';

interface FileUploadProps {
  onFileChange: (file: File | null) => void;
  accept: string;
  maxSizeMB?: number;
  label?: string;
  description?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileChange,
  accept,
  maxSizeMB = 10,
  label = "Upload File",
  description = "Max 10MB"
}) => {
  const { uploadState, handleFileChange, removeFile } = useFileUpload({
    maxSizeMB,
    onFileChange
  });

  return (
    <div className={`border-2 border-dashed rounded-lg p-8 text-center bg-gray-50 
      ${uploadState.error ? 'border-red-300' : 'border-gray-300 hover:border-indigo-400'} 
      transition-all duration-300`}>
      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
      
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        <p className="text-xs text-gray-500 mb-4">{description}</p>
        
        <input 
          type="file" 
          id="file-upload" 
          className="hidden"
          accept={accept} 
          onChange={handleFileChange} 
        />
        
        {!uploadState.fileName ? (
          <div className="inline-flex">
            <label 
              htmlFor="file-upload" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
            >
              Select File
            </label>
          </div>
        ) : (
          <div className="mt-2 flex items-center justify-center">
            <span className="text-sm text-gray-800">{uploadState.fileName}</span>
            <button 
              type="button" 
              onClick={removeFile}
              className="ml-2 text-indigo-600 hover:text-indigo-800"
            >
              Remove
            </button>
          </div>
        )}
        
        {uploadState.error && (
          <p className="mt-2 text-sm text-red-600">{uploadState.error}</p>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
