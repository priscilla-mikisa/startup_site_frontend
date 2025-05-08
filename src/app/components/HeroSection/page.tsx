import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const heroStyles = {
    container: {
      background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
      color: '#ffffff',
      padding: '4rem 0',
      '@media (min-width: 768px)': {
        padding: '6rem 0'
      }
    },
    innerContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      flexDirection: 'column',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    },
    contentSection: {
      width: '100%',
      marginBottom: '2.5rem',
      '@media (min-width: 768px)': {
        width: '50%',
        marginBottom: 0
      }
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
      '@media (min-width: 768px)': {
        fontSize: '3rem'
      }
    },
    subheading: {
      fontSize: '1.125rem',
      marginBottom: '2rem',
      '@media (min-width: 768px)': {
        fontSize: '1.25rem'
      }
    },
    callToAction: {
      display: 'inline-block',
      backgroundColor: '#ffffff',
      color: '#4f46e5',
      fontWeight: 600,
      padding: '0.75rem 1.5rem',
      borderRadius: '0.375rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      textDecoration: 'none',
      transition: 'background-color 0.3s',
      ':hover': {
        backgroundColor: '#f9fafb'
      }
    },
    imageSection: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      '@media (min-width: 768px)': {
        width: '50%'
      }
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      maxWidth: '500px',
      height: '300px',
      '@media (min-width: 768px)': {
        height: '400px'
      },
      borderRadius: '0.5rem',
      overflow: 'hidden',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }
  };

  return (
    <div className="bg-gradient-to-r from-emerald-800 to-emerald-500 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Accelerate Your Startup Journey</h1>
            <p className="text-lg md:text-xl mb-8">Submit your startup information and pitch deck to connect with investors, mentors, and resources tailored to your needs.</p>
            <a 
              href="/components/Forms" 
              className="inline-block bg-white text-emerald-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
            <Image 
                src="/images/launch-website_1212-24.avif" 
                alt="Startup Growth Illustration" 
                height={500}
                width={600}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
