import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import '../index.css';
import App from '../App.tsx';
import { Sidebar } from '../features/layout/components/sidebar.tsx';
import { Dashboard } from './pages/dashboard.tsx';
import { Setting } from './pages/setting.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Sidebar />}>
          <Route
            path='/'
            element={<App />}
          />
          <Route
            path='/dashboard'
            element={<Dashboard />}
          />
          <Route
            path='/setting'
            element={<Setting />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
