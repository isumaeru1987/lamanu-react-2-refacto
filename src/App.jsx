import { useEffect, useState } from "react";
import getUsers from "./services/userServices";
import UserPage from "./pages/UserPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/404";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/users",
    element: <UserPage />
  },
  {
    path:"*",
    element: <NotFound />
  },
])

export default function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  // ❌ Anti-pattern : logique lourde dans le JSX + index comme key
   {
    return (
      <RouterProvider router={router}/>
    );
  }
}
