import React from 'react';
import './Container.css'; // Don't forget to create this CSS file

function Container({ children }) {
  return (
    <div className="main-content">
      {children}
    </div>
  );
}

export default Container;
