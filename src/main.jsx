/** React */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/** Provider */
import UserProvider from './context/UserContext';

/** Router */
import { BrowserRouter, Routes, Route } from 'react-router';

/** Page */
import Home from './App';
import Users from './pages/UsersPage';
import User from './pages/UserDetails';

/** Style */
import './index.css';

/** Components */
import Navbar from './components/ui/Navbar';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />

          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<User />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>,
)
