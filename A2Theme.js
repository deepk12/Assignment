import React, { useState } from 'react';

// Higher Order Component to manage theme
const withTheme = (WrappedComponent) => {
  return (props) => {
    const [theme, setTheme] = useState('light');

    // Function to toggle theme
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return <WrappedComponent {...props} theme={theme} toggleTheme={toggleTheme} />;
  };
};

// Component to render based on theme
const ThemedComponent = ({ theme, toggleTheme }) => {
  // Dynamically apply styles based on the theme
  const themeStyles = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#000' : '#fff'
  };

  return (
    <div style={themeStyles}>
      <h2>Themed Component</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Apply HOC to ThemedComponent
const ThemedComponentWithTheme = withTheme(ThemedComponent);

// App component
const App = () => {
  return (
    <div>
      <h1>Theme Toggle App</h1>
      <ThemedComponentWithTheme />
    </div>
  );
};

export default App;
