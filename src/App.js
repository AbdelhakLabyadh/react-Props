
import './App.css';
import React from 'react';
import Data from './profile/profile';

function App() {
  const styleApp = {color: "blue", textAlign: "center", fontSize: 50, backgroundColor: 'rgb(29,26,26)'}
  return (
    <div className="App" style={styleApp}>

         <Data fullName="Labyadh Abdelhak" bio="26 years old FullStack JS student" />
          
    </div>
  );
}

export default App;
