import Navbar from "./components/Navbar";
import "./App.css";
import { BottomNavigation } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Electronics from "./components/Electronics";
import Fashion from "./components/Fashion";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <BottomNavigation sx={{ backgroundColor: "#f1f3f6" }} />
    </>
  );
}

export default App;
