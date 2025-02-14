import React, { createContext, useState } from 'react';

// Create the 
export const AppContext = createContext();


const AppProvider = ({ children }) => {
  const [Features] = useState([
    "Voice Recognition",
    "Ordering Medicines",
    "Stress Detection",
    "Scanning Doctor Prescription",
    "Remedies",
    "Pulse Detection",
  ]);

  const [filterDoc, setFilterDoc] = useState([
    {
      name: "Dr. Smith",
      speciality: "Cardiologist",
      image: "https://example.com/dr-smith.jpg",
    },
    {
      name: "Dr. Johnson",
      speciality: "Dermatologist",
      image: "https://example.com/dr-johnson.jpg",
    },
  ]);

  return (
    <Appcontext.Provider value={{ Features, filterDoc, setFilterDoc }}>
      {children}
    </Appcontext.Provider>
  );
};

export default AppProvider;
