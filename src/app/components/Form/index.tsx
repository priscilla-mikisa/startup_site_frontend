import { useForm } from '@/app/hooks/useForm';
import { submitStartupData } from '@/app/utils/api';
import { FounderFormData } from '@/app/utils/types';
import React, { useState } from 'react';
import FormSection from '../Founders';
import FileUpload from '../FileUpload';

const FounderForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [pitchDeckFile, setPitchDeckFile] = useState<File | null>(null);

  const initialValues: FounderFormData = {
    founderName: '',
    email: '',
    companyName: '',
    website: '',
    industry: '',
    stage: '',
    description: '',
    funding: '',
    comments: ''
  };

  const validate = (values: FounderFormData) => {
    const errors: Partial<Record<keyof FounderFormData, string>> = {};

    if (!values.founderName) errors.founderName = 'Founder name is required';
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.companyName) errors.companyName = 'Company name is required';
    if (!values.industry) errors.industry = 'Industry is required';
    if (!values.stage) errors.stage = 'Startup stage is required';
    if (!values.description) errors.description = 'Company description is required';

    return errors;
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isValid } = useForm<FounderFormData>({
    initialValues,
    validate,
    onSubmit: async (formValues) => {
      try {
        setIsSubmitting(true);
        setSubmitSuccess(null);
        setSubmitError(null);

        // Create form data to send
        const formData = new FormData();
        
        // Add form fields
        Object.entries(formValues).forEach(([key, value]) => {
          formData.append(key, value);
        });
        
        // Add pitch deck file if exists
        if (pitchDeckFile) {
          formData.append('pitchDeck', pitchDeckFile);
        }
        
        // Submit to API
        const response = await submitStartupData(formData);
        
        setSubmitSuccess(true);
        
        
        
        console.log('Submission successful:', response);
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError('There was an error submitting your information. Please try again later.');
        setSubmitSuccess(false);
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  const handleFileChange = (file: File | null) => {
    setPitchDeckFile(file);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-8 md:p-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Submit Your Startup Information</h2>
          
          {submitSuccess && (
            <div className="mb-6 p-4 rounded-md bg-green-50 text-green-800 border border-green-200">
              <p className="font-medium">Success! Your startup information has been submitted.</p>
              <p className="mt-1">We'll review your information and contact you soon.</p>
            </div>
          )}
          
          {submitError && (
            <div className="mb-6 p-4 rounded-md bg-red-50 text-red-800 border border-red-200">
              <p className="font-medium">Submission Error</p>
              <p className="mt-1">{submitError}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <FormSection title="Founder & Company Information">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="founderName" className="block text-sm font-medium text-gray-700 mb-1">
                    Founder Name *
                  </label>
                  <input
                    type="text"
                    id="founderName"
                    name="founderName"
                    value={values.founderName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                      touched.founderName && errors.founderName ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {touched.founderName && errors.founderName && (
                    <p className="mt-1 text-sm text-red-600">{errors.founderName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                      touched.email && errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={values.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                      touched.companyName && errors.companyName ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {touched.companyName && errors.companyName && (
                    <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={values.website}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </FormSection>
            
            {/* Startup Details */}
            <FormSection title="Startup Details">
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                  Industry *
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={values.industry}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                    touched.industry && errors.industry ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="" disabled>Select industry</option>
                  <option value="fintech">FinTech</option>
                  <option value="healthtech">HealthTech</option>
                  <option value="edtech">EdTech</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="saas">SaaS</option>
                  <option value="ai-ml">AI/ML</option>
                  <option value="cleantech">CleanTech</option>
                  <option value="other">Other</option>
                </select>
                {touched.industry && errors.industry && (
                  <p className="mt-1 text-sm text-red-600">{errors.industry}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="stage" className="block text-sm font-medium text-gray-700 mb-1">
                  Startup Stage *
                </label>
                <select
                  id="stage"
                  name="stage"
                  value={values.stage}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                    touched.stage && errors.stage ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="" disabled>Select stage</option>
                  <option value="idea">Idea/Concept</option>
                  <option value="mvp">MVP</option>
                  <option value="pre-seed">Pre-seed</option>
                  <option value="seed">Seed</option>
                  <option value="series-a">Series A</option>
                  <option value="series-b">Series B+</option>
                </select>
                {touched.stage && errors.stage && (
                  <p className="mt-1 text-sm text-red-600">{errors.stage}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Briefly describe your startup and what problem you're solving..."
                  className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                    touched.description && errors.description ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {touched.description && errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="funding" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Funding (if any)
                </label>
                <input
                  type="text"
                  id="funding"
                  name="funding"
                  value={values.funding}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g., $250K pre-seed"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </FormSection>
            
            {/* Pitch Deck Upload */}
            <FormSection title="Pitch Deck">
              <FileUpload
                onFileChange={handleFileChange}
                accept=".pdf,.pptx"
                maxSizeMB={10}
                label="Upload your pitch deck"
                description="PDF, PPTX, or Google Slides link (Max 10MB)"
              />
            </FormSection>
            
            {/* Additional Comments */}
            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={2}
                value={values.comments}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Any additional information you'd like to share..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className={`w-full font-bold py-3 px-6 rounded-lg shadow transition duration-300 ${
                  isSubmitting || !isValid
                    ? 'bg-indigo-300 cursor-not-allowed text-white'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FounderForm;