
import React, { useState } from 'react';
import Header from '../components/Header';
import UploadArea from '../components/UploadArea';
import ProcessingStatus, { StatusType } from '../components/ProcessingStatus';
import ResultsDisplay, { Assignment, OfficeHours } from '../components/ResultsDisplay';
import ActionButton from '../components/ActionButton';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  const [status, setStatus] = useState<StatusType>('idle');
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [showResults, setShowResults] = useState(false);
  
  // Mock data for demonstration
  const assignments: Assignment[] = [
    {
      title: "CS 101 Final Project",
      deadline: "Dec 15, 2023",
      estimatedTime: "10 hours"
    },
    {
      title: "Data Structures Problem Set",
      deadline: "Nov 30, 2023",
      estimatedTime: "6 hours"
    }
  ];
  
  const officeHours: OfficeHours[] = [
    {
      ta: "Professor Smith",
      day: "Monday",
      time: "2:00 PM - 4:00 PM",
      location: "Room 302"
    },
    {
      ta: "TA Johnson",
      day: "Wednesday",
      time: "10:00 AM - 12:00 PM",
      location: "Online Zoom"
    },
    {
      ta: "TA Williams",
      day: "Friday",
      time: "1:00 PM - 3:00 PM",
      location: "Lab 204"
    }
  ];

  const handleFileSelected = (file: File) => {
    // Simulate processing
    setStatus('uploading');
    setErrorMessage(undefined);
    setShowResults(false);
    
    // Simulate upload time
    setTimeout(() => {
      setStatus('processing');
      
      // Simulate processing time
      setTimeout(() => {
        // 90% chance of success for demo purposes
        if (Math.random() < 0.9) {
          setStatus('success');
          setShowResults(true);
        } else {
          setStatus('error');
          setErrorMessage('Could not extract data from image. Please try a clearer image.');
        }
      }, 2000);
    }, 1500);
  };
  
  const handleViewCalendar = () => {
    // In a real app, this would open Google Calendar or similar
    console.log('Opening calendar view...');
  };
  
  const handleReset = () => {
    setStatus('idle');
    setErrorMessage(undefined);
    setShowResults(false);
  };

  return (
    <div className="flex flex-col min-h-screen p-4 bg-charcoal">
      <Header />
      
      <main className="flex-1 my-2">
        {status === 'idle' && (
          <div className="section-container">
            <UploadArea onFileSelected={handleFileSelected} />
          </div>
        )}
        
        <ProcessingStatus status={status} errorMessage={errorMessage} />
        
        <ResultsDisplay 
          assignments={assignments} 
          officeHours={officeHours} 
          isVisible={showResults} 
        />
        
        {status === 'success' && (
          <div className="flex gap-2 mt-4">
            <ActionButton 
              onClick={handleViewCalendar}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
              }
            >
              View in Calendar
            </ActionButton>
            
            <ActionButton onClick={handleReset} secondary>
              New Upload
            </ActionButton>
          </div>
        )}
        
        {status === 'error' && (
          <div className="mt-4">
            <ActionButton onClick={handleReset} secondary>
              Try Again
            </ActionButton>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
