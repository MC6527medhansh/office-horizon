
import React from 'react';

export type StatusType = 'idle' | 'uploading' | 'processing' | 'success' | 'error';

interface ProcessingStatusProps {
  status: StatusType;
  errorMessage?: string;
}

const ProcessingStatus: React.FC<ProcessingStatusProps> = ({ status, errorMessage }) => {
  if (status === 'idle') return null;

  return (
    <div className="section-container">
      {status === 'uploading' && (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg 
              className="animate-spin-slow text-blue-light" 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="12" y1="2" x2="12" y2="6" />
              <line x1="12" y1="18" x2="12" y2="22" />
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
              <line x1="2" y1="12" x2="6" y2="12" />
              <line x1="18" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">Uploading image...</p>
            <div className="w-full h-1 bg-secondary mt-1 rounded-full overflow-hidden">
              <div className="h-full bg-blue-light animate-pulse-gentle w-2/3 rounded-full"></div>
            </div>
          </div>
        </div>
      )}

      {status === 'processing' && (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg 
              className="animate-spin-slow text-blue-light" 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
              <path d="M12 12v9" />
              <path d="m8 17 4 4 4-4" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">Processing data...</p>
            <p className="text-xs text-muted-foreground">Extracting assignments and office hours</p>
          </div>
        </div>
      )}

      {status === 'success' && (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-600/20 rounded-full flex items-center justify-center">
            <svg 
              className="text-green-500" 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="text-sm font-medium text-green-500">Success! Your schedule is ready.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center">
            <svg 
              className="text-red-500" 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-red-500">Error processing image</p>
            {errorMessage && <p className="text-xs text-muted-foreground">{errorMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessingStatus;
