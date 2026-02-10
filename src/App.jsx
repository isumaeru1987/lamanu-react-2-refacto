import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import UsersPage from "./pages/UsersPage";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  );
}
