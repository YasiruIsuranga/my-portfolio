import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  const [isDark, setIsDark] = useState(true); // Start with dark mode

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div style={{ minHeight: '100vh', overflow: 'hidden'}}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home toggleTheme={toggleTheme} />} />
          <Route path="*" element={<NotFound toggleTheme={toggleTheme} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;