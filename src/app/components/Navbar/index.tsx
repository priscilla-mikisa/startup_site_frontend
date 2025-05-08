"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navStyles = {
    container: {
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      width: '100%'
    },
    innerContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '4rem'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#4f46e5',
      textDecoration: 'none'
    },
    desktopMenu: {
      display: 'none',
      '@media (min-width: 768px)': {
        display: 'flex',
        marginLeft: '1.5rem'
      }
    },
    menuItem: {
      padding: '0.5rem 0.75rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#6b7280',
      textDecoration: 'none',
      ':hover': {
        color: '#4f46e5'
      }
    },
    activeMenuItem: {
      color: '#4f46e5',
      fontWeight: 600
    },
    mobileMenuButton: {
      display: 'flex',
      '@media (min-width: 768px)': {
        display: 'none'
      },
      padding: '0.5rem',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: '#6b7280'
    },
    mobileMenu: {
      display: mobileMenuOpen ? 'block' : 'none',
      '@media (min-width: 768px)': {
        display: 'none'
      },
      backgroundColor: '#ffffff',
      paddingTop: '0.5rem',
      paddingBottom: '0.75rem'
    },
    mobileMenuItem: {
      display: 'block',
      padding: '0.5rem 0.75rem',
      fontSize: '1rem',
      color: '#6b7280',
      textDecoration: 'none',
      borderLeftWidth: '4px',
      borderLeftColor: 'transparent',
      ':hover': {
        backgroundColor: '#f9fafb',
        borderLeftColor: '#4f46e5',
        color: '#4f46e5'
      }
    },
    activeMobileMenuItem: {
      borderLeftColor: '#4f46e5',
      color: '#4f46e5',
      fontWeight: 500
    }
  };

  
  return (
    <nav style={navStyles.container as React.CSSProperties}>
      <div style={navStyles.innerContainer as React.CSSProperties}>
        <div className="flex items-center">
          <Link href="/" style={navStyles.logo as React.CSSProperties}>
            LaunchPad
          </Link>
        </div>
        
        <div className="hidden md:flex md:ml-6 md:space-x-4">
          <Link 
            href="/components/HeroSection" 
            style={{
              ...navStyles.menuItem as React.CSSProperties,
              ...(true ? navStyles.activeMenuItem : {}) as React.CSSProperties
            }}
          >
            Home
          </Link>
          <a 
            href="/components/Forms" 
            style={navStyles.menuItem as React.CSSProperties}
          >
            Submit Info
          </a>
        </div>
        
        <button 
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white pt-2 pb-3 space-y-1`}>
        <Link 
          href="/" 
          className="block px-3 py-2 text-base font-medium text-emerald-700 border-l-4 border-emerald-700"
        >
          Home
        </Link>
        <a 
          href="#form" 
          className="block px-3 py-2 text-base font-medium text-emerald-700 hover:text-indigo-600 hover:bg-gray-50 hover:border-indigo-500 border-l-4 border-transparent"
        >
          Submit Info
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
