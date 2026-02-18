import { BrowserRouter, Routes, Route } from "react-router-dom";
import Builder from "./pages/Builder";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Builder />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
