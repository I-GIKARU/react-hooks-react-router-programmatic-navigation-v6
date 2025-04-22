import { useState, useEffect } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  // Add state management for login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Create login function
  const login = () => {
    setIsLoggedIn(true);
  };

  // Create logout function
  const logout = () => {
    setIsLoggedIn(false);
  };

  // Add useEffect for navigation based on login status
  useEffect(() => {
    if (isLoggedIn) {
      // Navigates to Home route if user is logged in
      navigate("/");
    } else {
      // Navigates to Login route if user is logged out
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="app">
      {/* Add conditional rendering so users have to be logged in to see pages on the site */}
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" />}
      {/* Pass login function to Outlet as context */}
      <Outlet context={login} />
    </div>
  );
}

export default App;
