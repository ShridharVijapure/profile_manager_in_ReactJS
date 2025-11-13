import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProfileDetails from "./pages/ProfileDetails";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />
        </Routes>
      </div>
    </Router>
  );
}