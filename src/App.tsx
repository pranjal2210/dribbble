import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalStateContext } from "./context/GlobalStateContext";
import { useContext, useEffect } from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const { dispatch } = useContext(GlobalStateContext)!; // Add non-null assertion because context could initially be undefined

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3001/categories");
        const categoriesData: string[] = await response.json();

        if (categoriesData) {
          console.log(categoriesData);
          dispatch({ type: "SET_CATEGORIES", payload: categoriesData });
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
