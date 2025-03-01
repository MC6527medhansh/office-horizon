
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-2 text-center">
      <div className="flex items-center justify-center mb-1">
        <div className="w-7 h-7 mr-2 bg-blue-light rounded-md flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-4 h-4 text-white"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
            <path d="m16 16-3-3 3-3" />
          </svg>
        </div>
        <h1 className="text-xl font-medium bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          Gumloop Assignment
        </h1>
      </div>
      <div className="chip bg-secondary/50 backdrop-blur-sm mx-auto">
        Extract. Schedule. Succeed.
      </div>
    </header>
  );
};

export default Header;
