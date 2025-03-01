
import React from 'react';

export interface Assignment {
  title: string;
  deadline: string;
  estimatedTime?: string;
}

export interface OfficeHours {
  ta: string;
  day: string;
  time: string;
  location?: string;
}

interface ResultsDisplayProps {
  assignments?: Assignment[];
  officeHours?: OfficeHours[];
  isVisible: boolean;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ 
  assignments = [], 
  officeHours = [], 
  isVisible 
}) => {
  if (!isVisible) return null;

  return (
    <div className="space-y-4">
      {assignments.length > 0 && (
        <div className="section-container">
          <div className="flex items-center mb-2">
            <div className="chip mr-2">Assignments</div>
            <h3 className="text-sm font-medium">Extracted {assignments.length} item(s)</h3>
          </div>
          
          <div className="space-y-2">
            {assignments.map((assignment, index) => (
              <div key={index} className="bg-muted/50 rounded-md p-2 border border-border/10">
                <h4 className="font-medium text-sm">{assignment.title}</h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted-foreground">Due: {assignment.deadline}</span>
                  {assignment.estimatedTime && (
                    <span className="text-xs bg-secondary/80 px-2 py-0.5 rounded">
                      ~{assignment.estimatedTime}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {officeHours.length > 0 && (
        <div className="section-container">
          <div className="flex items-center mb-2">
            <div className="chip mr-2">Office Hours</div>
            <h3 className="text-sm font-medium">Extracted {officeHours.length} session(s)</h3>
          </div>
          
          <div className="space-y-2">
            {officeHours.map((session, index) => (
              <div key={index} className="bg-muted/50 rounded-md p-2 border border-border/10">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-sm">{session.ta}</h4>
                  <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded-full">
                    {session.day}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted-foreground">{session.time}</span>
                  {session.location && (
                    <span className="text-xs text-muted-foreground">
                      {session.location}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;
