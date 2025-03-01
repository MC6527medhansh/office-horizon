
import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import ActionButton from '@/components/ActionButton';
import Footer from '@/components/Footer';

const Index = () => {
  const [isCapturing, setIsCapturing] = useState(false);
  
  const handleCapture = () => {
    setIsCapturing(true);
    // Simulate capture process
    setTimeout(() => {
      setIsCapturing(false);
    }, 1500);
  };

  return (
    <div className="min-h-[500px] flex flex-col">
      {/* Beautiful gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-800 to-slate-900 animate-gradient"
        style={{ 
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite'
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[15%] w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[15%] right-[15%] w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 z-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white mb-2">Screen Capture</h1>
          <p className="text-slate-300 text-sm">Click the button below to capture your screen</p>
        </div>
        
        <div className="relative">
          {/* Pulse effect when button is active */}
          {isCapturing && (
            <div className="absolute inset-0 rounded-md bg-blue-500/20 animate-pulse" />
          )}
          
          {/* Main capture button */}
          <ActionButton 
            onClick={handleCapture}
            disabled={isCapturing}
            icon={<Camera className="w-5 h-5" />}
            className="px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-blue-500/25"
          >
            {isCapturing ? 'Capturing...' : 'Capture'}
          </ActionButton>
        </div>
      </div>
      
      <Footer />
      
      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Index;
