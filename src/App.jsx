import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  const [isDark, setIsDark] = useState(true); // Default to dark mode

  useEffect(() => {
    // Apply dark class to document root
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Persist theme in localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="dark"> {/* Default dark mode class */}
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Home toggleTheme={toggleTheme} />} // Pass toggle function to Home
          />
          <Route
            path="*"
            element={<NotFound toggleTheme={toggleTheme} />} // Pass toggle function to NotFound
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;