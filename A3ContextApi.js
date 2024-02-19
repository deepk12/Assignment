import React, { useState, useContext } from 'react';

// Create a theme context
const ThemeContext = React.createContext();

// Provider component to provide the theme context
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Define styles for different themes
  const themes = {
    light: {
      color: '#000',
      fontFamily: 'Arial, sans-serif'
    },
    dark: {
      color: '#fff',
      fontFamily: 'Verdana, sans-serif'
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the theme context
const useTheme = () => useContext(ThemeContext);

// Component to render based on the theme
const ThemedComponent = () => {
  const { theme, setTheme, themes } = useTheme();

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div style={themes[theme]}>
      <h2>Themed Component</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>This is a sample text.</p>
    </div>
  );
};

// App component wrapped with ThemeProvider
const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Toggle App</h1>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
