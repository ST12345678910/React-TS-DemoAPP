import React from 'react';
import './apiContent.tsx';
import './App.css';

function App() {
  const descStyle = {
    margin: '2px',
    fontSize: 'calc(10px + 1vmin)'
  }
  return (
    
    <div className="App">
      <header className="App-header">

        <p>
          <code>React/TypeScript Demo</code>
        </p>
        
        <div style={descStyle} className="descriptionBox">
          <p>A simple React/TypeScript SPA (single-page-app) that utilizes the CATAAS  (Cat As A Service) <br></br> RESTFUL API. The user form input is joined with the API call, to generate a random  cat picture <br></br>with a caption the user has specified.</p>
        </div>
      </header>
      <header className="form-header">
        <code>Input Caption Below</code>
      </header>
    </div>
    
  );
}

export default App;
