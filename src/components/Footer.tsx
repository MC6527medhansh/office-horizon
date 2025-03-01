
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-3 px-4 mt-3 flex justify-between text-xs text-muted-foreground">
      <a href="#" className="hover:text-foreground transition-colors duration-200">Help</a>
      <a href="#" className="hover:text-foreground transition-colors duration-200">About</a>
      <a href="#" className="hover:text-foreground transition-colors duration-200">Settings</a>
    </footer>
  );
};

export default Footer;
