import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from './pages/UserPage';
import HomePage from "./pages/HomePage";
import UserItem from "./components/UserItem";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/:id" element={<UserItem />} />
      </Routes>
    </BrowserRouter>
  );
}