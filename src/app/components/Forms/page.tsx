"use client"
import React from 'react';
import FounderForm from '../Form';

const FormSection: React.FC = () => {
  return (
    <section id="form" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Submit Your Startup</h2>
          <p className="mt-4 text-lg text-gray-600">
            Fill out the form below to get started with LaunchPad
          </p>
        </div>
        
        <FounderForm />
      </div>
    </section>
  );
};

export default FormSection;