import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UsersPage from './pages/UsersPage';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import Navbar from './components/Navbar';

export default function App() {
  


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
