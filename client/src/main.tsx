import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import { ThemeContext } from './libs/contexts/themeContext';
import themeConfig from './config/theme';

const App = () => {
  const [theme, setTheme] = useState(themeConfig.default_dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <html data-theme={theme}>
        <RouterProvider router={router} />
      </html>
    </ThemeContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
