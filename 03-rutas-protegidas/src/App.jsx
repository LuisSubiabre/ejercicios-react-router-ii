import { Navigate } from "react-router-dom";
import { useContext } from "react";
import Administracion from "./components/Administracion";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { UserContext } from "./context/userContext";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={user ? <Administracion /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
