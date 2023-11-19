import React, { createContext, useState } from 'react';
 
// 1-Object context
export const AppContext = createContext();
  

// 2-Component context context
export function AppProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
}




