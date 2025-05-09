import React from 'react';

const Footer: React.FC = () => {
  const footerStyles = {
    container: {
      backgroundColor: '#1f2937',
      color: '#ffffff',
      padding: '2rem 0'
    },
    innerContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    topSection: {
      display: 'flex',
      flexDirection: 'column',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
    },
    companyInfo: {
      marginBottom: '2rem',
      '@media (min-width: 768px)': {
        marginBottom: 0
      }
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 700
    },
    companyDesc: {
      marginTop: '0.5rem',
      color: '#9ca3af'
    },
    linksContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: '2rem',
      '@media (min-width: 768px)': {
        gap: '4rem'
      }
    },
    linkGroup: {},
    linkHeader: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#d1d5db',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    linkList: {
      marginTop: '1rem',
      listStyle: 'none',
      padding: 0
    },
    linkItem: {
      marginTop: '0.5rem'
    },
    link: {
      color: '#9ca3af',
      textDecoration: 'none',
      ':hover': {
        color: '#ffffff'
      }
    },
    bottomSection: {
      marginTop: '2rem',
      paddingTop: '2rem',
      borderTopWidth: '1px',
      borderTopColor: '#374151',
      textAlign: 'center',
      '@media (min-width: 768px)': {
        textAlign: 'left'
      }
    },
    copyright: {
      color: '#9ca3af'
    }
  };

  return (
    <footer style={footerStyles.container as React.CSSProperties}>
      <div style={footerStyles.innerContainer as React.CSSProperties}>
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold">LaunchPad</span>
            <p className="mt-2 text-gray-400">Empowering startups to reach their potential</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Partners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="mailto:info@launchpad.com" className="text-gray-400 hover:text-white">info@launchpad.com</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center md:text-left">
          <p className="text-gray-400">© {new Date().getFullYear()} LaunchPad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
