import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListingDetails from "./components/ListingDetails";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Profile from "./pages/Profile"
import Apartments from "./pages/Apartments";
import Lodges from "./pages/Lodges";
import Agent from "./pages/Agent";
import AgentDashboard from "./pages/agent/Dashboard";
import AgentPost from "./pages/agent/Post";
import AdminLogin from "./pages/auth/AdminLogin";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminSettings from "./pages/admin/Settings";
// import AdminPost from "./pages/admin/Post";
// import AdminProfile from "./pages/admin/Profile";
import Maintainance from "./pages/Maintainance";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listingDetails" element={<ListingDetails />} />
      <Route path="/auth/Login" element={<Login />} />
      <Route path="/auth/Signup" element={<Signup />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Lodges" element={<Lodges />} />
      <Route path="/Apartments" element={<Apartments />} />
      <Route path="/Agent" element={<Agent />} />
      <Route path="/Agent/Dashboard" element={<AgentDashboard />} />
      <Route path="/Agent/Post" element={<AgentPost />} />
      <Route path="/auth/AdminLogin" element={<AdminLogin />} />
      <Route path="/admin/Dashboard" element={<AdminDashboard />} />
      {/* <Route path="/admin/Post" element={<AdminPost />} /> */}
      <Route path="/admin/Settings" element={<AdminSettings />} />
      {/* <Route path="/admin/Profile" element={<AdminProfile />} /> */}
      <Route path="/Maintainance" element={<Maintainance />} />
      
      {/* Catch-all route for undefined paths */}
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
